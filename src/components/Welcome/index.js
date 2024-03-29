// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      return 'Subscribe'
    }
    return 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading"> Welcome </h1>
        <p className="description"> Thank you! Happy Learning</p>
        <button className="sub-button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
