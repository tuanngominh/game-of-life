import React, {Component} from 'react'
import Board from './Board'
import Controls from './Controls'
import cloneDeep from 'lodash/cloneDeep'
import {dieOrBorn, randomGeneration, buildBlankWorld} from '../lib/utils'

class Game extends Component {
  constructor(props) {
    super(props)

    const initBoardSize = (props.initBoardSize) ? props.initBoardSize : 10
    this.state = {
      interval: (props.interval) ? props.interval : 2,
      boardSize: initBoardSize,
      creatures: buildBlankWorld(initBoardSize)
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleInit = this.handleInit.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleSetup = this.handleSetup.bind(this)

    this.handlePause = this.handlePause.bind(this)
    this.handleResume = this.handleResume.bind(this)
  }
  handleStart() {
    this.handleInit()

    this.timerId = setInterval(
      () => this.handleNext(),
      this.state.interval * 1000
    )
  }
  handlePause() {
    if (this.timerId) {
      clearInterval(this.timerId)  
    }
  }
  handleResume() {
    this.timerId = setInterval(
      () => this.handleNext(),
      this.state.interval * 1000
    )
  }
  handleReset() {
    if (this.timerId) {
      clearInterval(this.timerId)  
    }
    this.setState((prevState, props) => {
      return {
        creatures: buildBlankWorld(prevState.boardSize)
      }
    })
  }
  handleInit() {
    const creatures = randomGeneration(this.state.boardSize)
    this.setState({
      creatures: creatures
    })
  }
  handleSetup(x, y) {
    //user click a cell to toggle state there
    this.setState((prevState, props) => {
      const newCreatures = cloneDeep(prevState.creatures)
      if (newCreatures[x][y] === 0) {
        newCreatures[x][y] = 1
      } else {
        newCreatures[x][y] = 0
      }

      return {
        creatures: newCreatures
      }
    })
  }
  handleNext() {
    this.setState((prevState, props) => {
      const a = dieOrBorn(prevState.creatures, prevState.boardSize)
      return {
        creatures: a
      }
    })
  }
  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId)  
    }
  }
  render() {
    return (
      <div>
        <Board
          creatures={this.state.creatures} 
          boardSize={this.state.boardSize} 
          interval={this.state.interval} 
          onSetup={this.handleSetup}
        />
        <Controls 
          onStart={this.handleStart} 
          onPause={this.handlePause} 
          onReset={this.handleReset} 
          onResume={this.handleResume} 
          onInit={this.handleInit} 
          onNext={this.handleNext}
        />
      </div>
    )
  }
}

export default Game