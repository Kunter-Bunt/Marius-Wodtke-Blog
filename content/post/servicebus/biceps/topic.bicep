param serviceBusName string
param topic object

resource serviceBusResource 'Microsoft.ServiceBus/namespaces@2022-10-01-preview' existing = {
  name: serviceBusName
}

resource serviceBusTopic 'Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview' = {
  name: topic.name
  parent: serviceBusResource
  properties: {
    autoDeleteOnIdle: 'P10675198DT2H48M5.477S' // Never
    defaultMessageTimeToLive: 'P14D'
  }
}

module subscriptionModule 'subscription.bicep' = [for subscription in topic.subscriptions: {
  name: '${deployment().name}-${substring(subscription.name,0,min(length(subscription.name),25))}'
  params: {
    serviceBusName: serviceBusResource.name
    topicName: topic.name
    subscription: subscription
  }
  dependsOn:[
    serviceBusTopic
  ]
}]







