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
      timerId: null,
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

    this.handleBoardsizeChange = this.handleBoardsizeChange.bind(this)
    this.handleIntervalChange = this.handleIntervalChange.bind(this)
  }
  _clearTimer() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)  
    }
  }
  handleBoardsizeChange(newBoardsize) {
    this._clearTimer()
    this.setState({
      boardSize: newBoardsize,
      creatures: buildBlankWorld(newBoardsize)
    })
  }
  handleIntervalChange(newInterval) {
    this._clearTimer()

    const timerId = setInterval(
      () => this.handleNext(),
      newInterval * 1000
    )
    this.setState({
      interval: newInterval,
      timerId : timerId
    }) 
  }
  handleStart() {
    this.handleInit()

    const timerId = setInterval(
      () => this.handleNext(),
      this.state.interval * 1000
    )
    this.setState({
      timerId: timerId
    })
  }
  handlePause() {
    this._clearTimer()
  }
  handleResume() {
    const timerId = setInterval(
      () => this.handleNext(),
      this.state.interval * 1000
    )
    this.setState({
      timerId : timerId
    })
  }
  handleReset() {
    this._clearTimer()
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
    this._clearTimer()
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
        <br />
        <Controls 
          boardsize={this.state.boardSize} 
          onBoardsizeChange={this.handleBoardsizeChange}

          interval={this.state.interval} 
          onIntervalChange={this.handleIntervalChange}

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