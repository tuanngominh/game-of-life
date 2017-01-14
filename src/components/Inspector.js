import React, {Component, PropTypes} from 'react'
import Board from './Board'

import DieBornRate from './Inspector/DieBornRate'

import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'

class Inspector extends Component {
  static propTypes = {
    previousGen: PropTypes.array,
    currentGen: PropTypes.array.isRequired,
    boardSize: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={2} id="inspectorTabs">
            <Tab eventKey={1} title="Previous Generation">
              <br/>
              {this.props.previousGen ? 
                <Board
                  creatures={this.props.previousGen} 
                  boardSize={this.props.boardSize} 
                />
                :
                'Empty'
              }
            </Tab>
            <Tab eventKey={2} title="Die/Born rate">
              <br/>
              <DieBornRate previousGen={this.props.previousGen} currentGen={this.props.currentGen} />
            </Tab>
          </Tabs>      
      </div>
    )
  }
}

export default Inspector