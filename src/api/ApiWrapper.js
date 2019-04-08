import axios from 'axios'

const ApiWrapper = function (options) {
  const onSuccess = function (response) {
    return response.data
  }

  const onError = function (error) {
    if (!error.response && DEBUG) {
      console.error('Error Message:', error.message)
    }

    return Promise.reject(error.response || error.message)
  }

  return axios(options)
    .then(onSuccess)
    .catch(onError)
}

export default ApiWrapper
