// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, clicked: false}

  handleEvent = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  renderSubscribedButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      return (
        <button className="button" type="button" onClick={this.handleEvent}>
          Subscribe
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.handleEvent}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="paragraph">Thank You! Happy Learning</p>
        {this.renderSubscribedButton()}
      </div>
    )
  }
}

export default Welcome
