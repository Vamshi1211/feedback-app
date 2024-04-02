// Write your React code here.
import {Component} from 'react'
import Emoji from '../Emoji'
import Greeting from '../Greeting'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  emojiClicked = uniqueId => {
    const {resources} = this.props
    const {emojis} = resources
    if (emojis[uniqueId].id === uniqueId) {
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    }
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props

    return (
      <div className="app-container">
        <div className="card-container">
          {isClicked ? (
            <h1 className="thank-you">Thank you!</h1>
          ) : (
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
          )}
          <ul className="emojis-container">
            {isClicked ? (
              <Greeting resourcesList={resources} />
            ) : (
              resources.emojis.map(eachItem => (
                <Emoji
                  resourcesList={eachItem}
                  emojiClicked={this.emojiClicked}
                  key={eachItem.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
