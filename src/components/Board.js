import React, {Component} from 'react'
import Creature from './Creature'
import {randomFirstGeneration} from '../utils'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {},
      creatures: randomFirstGeneration(props.boardSize)
    }
  }
  render() {
    const boardSize = this.props.boardSize;
    let creatures = []
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        const key = x + '-' + y
        creatures.push(<Creature key={key} coord={{x: x, y: y}} generation={this.state.creatures[x][y]} />)
      }
      creatures.push(<div key={x + '-endline'} style={{clear:'both'}} />)
    }

    return (
      <div className='board' style={this.state.style} >
        {creatures}
      </div>
    );
  }
  componentDidMount() {
    //set width of board so the board is center
    const aCreature = document.querySelector('.creature')
    const width = aCreature.getBoundingClientRect().width;
    this.setState({
      style: {
        width: width * this.props.boardSize
      }
    })
  }
}

export default Board