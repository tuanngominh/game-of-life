import React, {Component} from 'react'
import Creature from './Creature'
import {dieOrBorn} from '../lib/utils'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {},
      creatures: props.creatures
    }
  }

  render() {
    const boardSize = this.props.boardSize;
    let creatures = []
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        const key = x + '-' + y
        creatures.push(<Creature key={key} generation={this.state.creatures[x][y]} />)
      }
      creatures.push(<div key={x + '-endline'} style={{clear:'both'}} />)
    }

    return (
      <div className='board' style={this.state.style} >
        {creatures}
      </div>
    );
  }
  nextGeneration() {
    this.setState((prevState, props) => {
      return {
        creatures: dieOrBorn(this.state.creatures, this.props.boardSize)
      }
    })
  }
  componentDidMount() {
    if (this.props.timer) {
      this.timerId = setInterval(
        () => this.nextGeneration(),
        this.props.interval * 1000
      )
    }

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
  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId)  
    }
  }
}

export default Board