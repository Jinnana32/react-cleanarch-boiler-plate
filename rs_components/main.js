const ReactDOM = require('react-dom')
const React = require('react')

import { GenericButton } from './UButton'

class App extends React.Component {
  render () {
    return (
      <div>
        UB Components
        <br />
        <GenericButton
          text={ 'test button' }
        />
        <GenericButton
          text={ 'test button' }
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
