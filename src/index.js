import React from 'react'
import ReactDOM from 'react-dom'

/* redux */
import { Provider } from 'react-redux'

/* Routers */
import { HashRouter, Route, browserHistory } from 'react-router-dom'

/* Routes */
import App from './views/App'
import { main } from './css'

import store from './store'

console.log(React.version);

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter history={ browserHistory }>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'))
