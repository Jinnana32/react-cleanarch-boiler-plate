import { Observable } from 'rxjs'

export default class AppService {
  constructor (RsApiClient, accountClient) {
    this.RsApiClient = RsApiClient
  }

}
