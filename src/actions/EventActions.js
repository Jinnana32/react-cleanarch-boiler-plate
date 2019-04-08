import { CHANGE_TOKEN_EVENT } from '../utils/actionUtil'

export function changeToken (token) {
  return { type: CHANGE_TOKEN_EVENT, token }
}
