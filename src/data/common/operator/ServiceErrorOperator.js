import GenericError from '../../../domain/common/exception/GenericError'
import ForbiddenError from '../../../domain/common/exception/ForbiddenError'
import ServerError from '../../../domain/common/exception/ServerError'
import { Observable } from 'rxjs'

export default function ServiceErrorOperator () {
  return function ServiceErrorOperatorImpl (source) {
    return Observable.create(subscriber => {
      const subscription = source.subscribe(resp => {

        const code = resp.status
        const body = resp.data

        console.log(resp);

        if (code === 200) {
          subscriber.next(body)
        } else if (code === 400) {
          subscriber.error(new GenericError(body))
        } else if (code === 401) {
          subscriber.error(new ForbiddenError())
        } else {
          subscriber.error(new ServerError(`It seems that we've encountered a problem. Error: ${code}`))
        }
      },
      err => subscriber.error(new ServerError('It seems that \'ve encountered a problem. Error: 2')),
      () => subscriber.complete())

      return subscription
   })
  }
}
