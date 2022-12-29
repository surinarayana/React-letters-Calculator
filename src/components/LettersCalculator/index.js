// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {text: ''}

  onCountSearchInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text} = this.state
    let count = 0
    count = text.length
    return (
      <div className="bg-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <h1 className="heading"> Calculate the Letters you enter</h1>
        <div className="input-container">
          <label className="phrase">
            Enter the phrase
            <input
              type="text"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onCountSearchInput}
            />
          </label>
        </div>
        <div className="count-container">
          <p>No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
