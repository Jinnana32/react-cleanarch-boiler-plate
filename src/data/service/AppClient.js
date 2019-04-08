import ServiceErrorOperator from '../common/operator/ServiceErrorOperator'
import store from '../../store'
import { EventActions } from '../../actions'
import { Observable } from 'rxjs'

export default class AppClient {
  constructor (service, storageProvider) {
    this.service = service
    this.storageProvider = storageProvider
  }

}
