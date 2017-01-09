import React, {Component} from 'react'
import NumberInput from './NumberInput'

class Controls extends Component {
  render() {
    return (
      <div>
        <NumberInput 
          label='Interval'
          inputClassName='interval' 
          value={this.props.interval} 
          onSave={this.props.onIntervalChange}
        />
        <NumberInput 
          label='Board size' 
          inputClassName='boardsize'
          value={this.props.boardsize} 
          onSave={this.props.onBoardsizeChange}
        />

        <button className='btn-start' onClick={this.props.onStart}>Start</button>
        <button className='btn-pause' onClick={this.props.onPause}>Pause</button>
        <button className='btn-resume' onClick={this.props.onResume}>Resume</button>
        <button className='btn-reset' onClick={this.props.onReset}>Reset</button>

        <br/><br/>

        <button className='btn-init' onClick={this.props.onInit}>Init</button>
        <button className='btn-next' onClick={this.props.onNext}>Next</button>
      </div>      
    )
  }
}

export default Controls