// Write your code here.
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  countLetter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div>
        <div>
          <div>
            <h1>Calculate the Letters you enter</h1>
            <input
              id="letter"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.countLetter}
            />
            <label htmlFor="letter">Enter the phrase</label>
            <p>No.of Letters: {count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
