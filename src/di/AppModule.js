import { Rxios } from 'rxios'

import AppService from '../data/service/AppService'
import AppClient from '../data/service/AppClient'
import StorageProvider from '../data/provider/StorageProvider'

export default container => {
  
  container.singleton('StorageProvider', StorageProvider)

  container.singleton('RsApiClient',
    new Rxios({
      baseURL: BASE_URL,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
  )

  container.singleton('AppService', AppService, ['RsApiClient'])
  container.singleton('AppClient', AppClient, ['AppService', 'StorageProvider'])

  return container
}
