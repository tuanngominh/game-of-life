import React, {Component} from 'react'

class Controls extends Component {
  render() {
    return (
      <div>
        <button className='btn-start' onClick={this.props.onStart}>Start</button>
        <button className='btn-pause' onClick={this.props.onPause}>Pause</button>
        <button className='btn-resume' onClick={this.props.onResume}>Resume</button>
        <button className='btn-reset' onClick={this.props.onReset}>Reset</button>
        <button className='btn-next' onClick={this.props.onNext}>Next</button>
        <button className='btn-init' onClick={this.props.onInit}>Init</button>
      </div>      
    )
  }
}

export default Controls