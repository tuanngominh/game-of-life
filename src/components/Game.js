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

    const initBoardSize = (props.initBoardSize) ? props.initBoardSize : 40
    this.state = {
      timerId: null,
      interval: (props.interval) ? props.interval : 2,
      boardSize: initBoardSize,
      history: [buildBlankWorld(initBoardSize)],      
      inspect: true
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
    this._clearTimer()
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
  handleInspect = () => {
    this.setState((prevState) => ({
      inspect: !prevState.inspect
    }))
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
            Current Generation
            <Board
              creatures={currentGen} 
              boardSize={this.state.boardSize} 
              interval={this.state.interval} 
              onSetup={this.handleSetup}
            />
            <br/>
            Cell annotation:
            <div>
              <span className='generation-0 creature creature-annotation'/>{'  '}Empty, deserted, died, ...<br/>
              <div className='generation-1 creature creature-annotation'/>{' '}Generation 1<br/>
              <div className='generation-2 creature creature-annotation'/>{' '}Generation 2, 3, 4, ...<br/>
            </div>

            <br/>

            <div className="checkbox">
              <label>
                <input type="checkbox" className='toggle-inspector' checked={this.state.inspect} onChange={this.handleInspect} /> Show inspector
              </label>
            </div>
            { 
              (this.state.inspect) && <Inspector 
                currentGen={currentGen}
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