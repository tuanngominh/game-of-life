import React, {Component} from 'react'

class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardsize: props.boardsize
    }
    this.handleBoadsizeChange = this.handleBoadsizeChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  handleBoadsizeChange(e) {
    if(!isNaN(e.target.value)) {
      this.setState({
        boardsize: parseInt(e.target.value, 10)
      })
    }
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.onBoardsizeChange(this.state.boardsize)
    }
  }
  render() {
    return (
      <div>
        Board size : <input 
          className='boardsize' 
          value={this.state.boardsize} 
          onChange={this.handleBoadsizeChange} 
          onKeyUp={this.handleKeyUp}
        />
        <button 
          className='btn-boardsizechange' 
          onClick={() => {
            this.props.onBoardsizeChange(this.state.boardsize)
          }}
        >
        Apply 
        </button>
        <br/><br/>

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