import React from 'react'
import ReactDOM from 'react-dom'

class CustomCom extends React.Component {
  constructor(props) {
    super(props)

    this._handleClick = this._handleClick.bind(this) // Use bind
  }
  
  render() {
    return (
      <div>
        <button onClick={this._handleClick}>快点我</button>
      </div>
    )
  }

  _handleClick() {
    console.log(this)
  }
}

ReactDOM.render(
  <CustomCom />,
  document.getElementById('app')
)