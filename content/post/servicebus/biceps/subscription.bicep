param serviceBusName string
param topicName string
param subscription object

resource serviceBusResource 'Microsoft.ServiceBus/namespaces@2022-10-01-preview' existing = {
  name: serviceBusName
}

resource serviceBusTopic 'Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview' existing = {
  name: topicName
  parent: serviceBusResource
}

resource serviceBusSubscription 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview' = {
  parent: serviceBusTopic
  name: subscription.name
  properties: {
    isClientAffine: false
    lockDuration: 'PT5M'
    requiresSession: false
    defaultMessageTimeToLive: 'P14D'
    deadLetteringOnMessageExpiration: true
    deadLetteringOnFilterEvaluationExceptions: false
    maxDeliveryCount: 10
    status: 'Active'
    enableBatchedOperations: true
    autoDeleteOnIdle: 'P10675198DT2H48M5.477S' // Never
  }
}

resource serviceBusRule 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview' = [for rule in subscription.rules: {
  parent: serviceBusSubscription
  name: rule.name
  properties: {
    filterType: 'CorrelationFilter'
    correlationFilter: { 
      properties: union(
        contains(rule, 'entity') 
        ? { 'http://schemas.microsoft.com/xrm/2011/Claims/EntityLogicalName': rule.entity } 
        : {}, 
        contains(rule, 'message') 
        ? { 'http://schemas.microsoft.com/xrm/2011/Claims/RequestName': rule.message } 
        : {})
    }
  }
}]
