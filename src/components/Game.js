import React, {Component} from 'react'

import Board from './Board'
import Controls from './Controls'
import Inspector from './Inspector'

import Header from './Page/Header'
import Footer from './Page/Footer'

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
      history: [buildBlankWorld(initBoardSize)]
    }
  }
  _clearTimer() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)  
    }
  }
  handleBoardsizeChange = (newBoardsize) => {
    this._clearTimer()
    this.setState({
      boardSize: newBoardsize,
      history: [buildBlankWorld(newBoardsize)]
    })
  }
  handleIntervalChange = (newInterval) => {
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
  handleStart = () => {
    this.handleInit()

    const timerId = setInterval(
      () => this.handleNext(),
      this.state.interval * 1000
    )
    this.setState({
      timerId: timerId
    })
  }
  handlePause = () => {
    this._clearTimer()
  }
  handleResume = () => {
    const timerId = setInterval(
      () => this.handleNext(),
      this.state.interval * 1000
    )
    this.setState({
      timerId : timerId
    })
  }
  handleReset = () => {
    this._clearTimer()
    this.setState((prevState, props) => {
      return {
        history: [buildBlankWorld(prevState.boardSize)]
      }
    })
  }
  handleInit = () => {
    const creatures = randomGeneration(this.state.boardSize)
    this.setState({
      history: [creatures]
    })
  }
  handleSetup = (x, y) => {
    //user click a cell to toggle state there
    this.setState((prevState, props) => {
      const history = prevState.history
      const currentGen = history[history.length - 1]
      const nextGen = cloneDeep(currentGen)
      if (nextGen[x][y] === 0) {
        nextGen[x][y] = 1
      } else {
        nextGen[x][y] = 0
      }

      return {
        history: [nextGen]
      }
    })
  }
  handleNext = () => {
    this.setState((prevState, props) => {
      const history = prevState.history
      const currentGen = history[history.length - 1]
      const nextGen = dieOrBorn(currentGen, prevState.boardSize)

      //keep two generations
      return {
        history: [currentGen, nextGen]
      }
    })
  }
  componentWillUnmount() {
    this._clearTimer()
  }
  render() {
    const history = this.state.history
    const currentGen = history[history.length - 1]
    let prevGen = null
    if (history.length === 2) {
      prevGen = history[0]
    }
    return (
      <div className='container'>
        
        <Header />

        <div className='row'>
          <div className='col-xs-12 col-sm-8'>
            Current Board
            <Board
              creatures={currentGen} 
              boardSize={this.state.boardSize} 
              interval={this.state.interval} 
              onSetup={this.handleSetup}
            />
            
            <br/>

            { 
              (prevGen) && <Inspector 
                previousGen={prevGen} 
                boardSize={this.state.boardSize}
              />
            }
            
          </div>
          <div className='col-xs-12 col-sm-4'>
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
        </div>

        <Footer />
      </div>
    )
  }
}

export default Game