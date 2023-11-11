param serviceBusName string
param location string = resourceGroup().location

var topics = [
  {
    name: 'dataverse'
    subscriptions: [
      {
        name: 'account-export'
        rules: [
          {
            name: 'accountUpdate'
            entity: 'account'
            message: 'Update'
          }
          {
            name: 'accountCreate'
            entity: 'account'
            message: 'Create'
          }
        ]
      }
    ]
  }
]

module serviceBusModule 'servicebus.bicep' = {
  name: '${deployment().name}-${serviceBusName}'
  params: {
    serviceBusName: serviceBusName
    location: location
  }
}

module topicModule 'topic.bicep' = [for topic in topics: {
  name: '${deployment().name}-${topic.name}'
  params: {
    serviceBusName: serviceBusName
    topic: topic
  }
  dependsOn: [
    serviceBusModule
  ]
}]
