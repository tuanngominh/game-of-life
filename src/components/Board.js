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
    // console.log(this.props.creatures)
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        const key = x + '-' + y
        // console.log(x, y)
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
        <button className='btn-start' onClick={this.props.onStart}>Start</button>
        <button className='btn-stop' onClick={this.props.onStop}>Stop</button>
        <button className='btn-next' onClick={this.props.onNext}>Next</button>
        <button className='btn-init' onClick={this.props.onInit}>Init</button>
      </div>
    );
  }
  componentDidMount() {
    //set width of board so the board is center
    const aCreature = document.querySelector('.creature')
      // will not available in enzyme test env
    if (aCreature) {
      const width = aCreature.getBoundingClientRect().width;
      this.setState({
        style: {
          width: width * this.props.boardSize
        }
      })      
    }
  }
}

export default Board