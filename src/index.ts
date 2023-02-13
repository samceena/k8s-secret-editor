import * as k8s from '@kubernetes/client-node'
import {secretDecoders} from './utils'

const kc = new k8s.KubeConfig()
kc.loadFromDefault()

const k8sApi = kc.makeApiClient(k8s.CoreV1Api)

const namespace = 'dev'

k8sApi
  .listNamespacedSecret(namespace)
  .then(data => {
    const secrets = data.body.items.map(item => ({
      name: item.metadata.name,
      namespace: item.metadata.namespace,
      secrets: secretDecoders(item.data),
    }))
    console.log('secrets: ', secrets, '\n')
  })
  .catch(error => {
    console.log('error loading secrets: ', error)
  })
