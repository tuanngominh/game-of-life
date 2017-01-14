import React, { Component, PropTypes } from 'react'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class DieBornRate extends Component {
  static propTypes = {
    previousGen: PropTypes.array,
    currentGen: PropTypes.array.isRequired,
    historyLength: PropTypes.number
  }

  static defauftProps = {
    historyLength: 10
  }

  constructor(props) {
    super(props)
    this.state = {
      data : [{die:0, born:0}],
      historyLength: props.historyLength,
      gen: 0
    }
  }
  extractDieBornStatistic(previousGen, currentGen) {
    const boardSize = previousGen.length
    let die = 0, born = 0;
    for(let x = 0; x < boardSize; x++) {
      for(let y = 0; y< boardSize; y++) {
        if (previousGen[x][y] >= 1 && currentGen[x][y] === 0) {
          die++
        } else if (previousGen[x][y] === 0 && currentGen[x][y] >= 1) {
          born++
        }
      }
    }
    return {die, born}
  }
  componentWillReceiveProps(nextProps) {
    //init without previous generation, just add empty dot on chart
    if (!nextProps.previousGen && nextProps.currentGen) {
      this.setState({
        data: [{die: 0, born: 0, gen: 0}],
        gen: 0
      })
      return;
    }

    const dieBorn = this.extractDieBornStatistic(nextProps.previousGen, nextProps.currentGen)

    //no change found between generations
    if (dieBorn.die === 0 && dieBorn.born === 0) {
      return
    }

    //there is change between generations
    this.setState((prevState) => {
      let currentData;

      //if we reach max chart length then we need to truncate the history data by 1
      if (prevState.data.length === prevState.historyLength) {
        currentData = prevState.data.slice(1)
      } else {
        currentData = prevState.data
      }
      dieBorn.gen = prevState.gen + 1
      return {
        data: [...currentData, dieBorn],
        gen: prevState.gen + 1
      }      
    })
  }
  render() {
    return (
      <ResponsiveContainer aspect={2.5}>
        <LineChart  data={this.state.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}} >
         <XAxis dataKey="gen"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="die" stroke="#8884d8" activeDot={{r: 8}} isAnimationActive={false} />
         <Line type="monotone" dataKey="born" stroke="#82ca9d" isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default DieBornRate;