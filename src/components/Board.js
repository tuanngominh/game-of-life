import React, {Component} from 'react'
import Creature from './Creature'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {}
    }
  }

  render() {
    const boardSize = this.props.boardSize;
    let creatures = []
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        const key = x + '-' + y
        creatures.push(<Creature 
            key={key} 
            generation={this.props.creatures[x][y]} 
            onClick={()=>{this.props.onSetup(x, y)}}
          />
        )
      }
      creatures.push(<div key={x + '-endline'} style={{clear:'both'}} />)
    }

    return (
      <div>
        <div className='board' style={this.state.style} >
          {creatures}
        </div>
      </div>
    );
  }
}

export default Board