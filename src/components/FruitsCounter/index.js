import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  forBanana = () => {
    this.setState(previous => ({banana: previous.banana + 1}))
  }

  forMango = () => {
    this.setState(previous => ({mango: previous.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="for_outer_container">
        <div className="for_inner_1">
          <h1 className="forHeader">
            Bob ate <span className="for_span">{mango}</span> mangoes{' '}
            <span className="for_span">{banana}</span> bananas
          </h1>
          <div className="for_inner_container">
            <div className="forImage_and_button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="for_image"
              />
              <button
                className="for_button"
                type="button"
                onClick={this.forMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="forImage_and_button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="for_image"
              />
              <button
                type="button"
                className="for_button"
                onClick={this.forBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
