import React, {Component} from 'react'
import Board from './Board'

class Inspector extends Component {
  render() {
    return (
      <div>
        Previous Generation
        <Board
          creatures={this.props.previousGen} 
          boardSize={this.props.boardSize} 
        />
      </div>
    )
  }
}

export default Inspector