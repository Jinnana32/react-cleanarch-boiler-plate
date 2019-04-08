const USER_TOKEN = "USER_TOKEN"
const USER_DETAILS = "USER_DETAILS"
const USER_ACCESS_LEVEL = 'USER_ACCESS_LEVEL'

export default class StorageProvider {
  constructor () {
    this.storage = window.localStorage
  }

  setToken (token = '') {
    this.storage.setItem(USER_TOKEN, token)
  }

  setDetails (details = '') {
    this.storage.setItem(USER_DETAILS, details)
  }

  setRole (accessLevel = '') {
    this.storage.setItem(USER_ACCESS_LEVEL, accessLevel)
  }

  getToken () {
    return this.storage.getItem(USER_TOKEN) || ''
  }

  getDetails () {
    return this.storage.getItem(USER_DETAILS) || ''
  }

  getRole () {
    return this.storage.getItem(USER_ACCESS_LEVEL) || []
  }


}
