import React, {Component} from 'react'
import Board from './Board'

import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'

class Inspector extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Previous Generation">
              {this.props.previousGen ? 
                <Board
                  creatures={this.props.previousGen} 
                  boardSize={this.props.boardSize} 
                />
                :
                'Empty'
              }
            </Tab>
            <Tab eventKey={2} title="Die/Born rate">asdfasdf</Tab>
          </Tabs>      
      </div>
    )
  }
}

export default Inspector