import React, {PureComponent, PropTypes} from 'react'
import NumberInput from './NumberInput'
import HelpText from './Controls/HelpText'
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'

class Controls extends PureComponent {
  static propTypes = {
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onResume: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,

    onInit: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,

    interval: PropTypes.number,
    onIntervalChange: PropTypes.func.isRequired,

    boardsize: PropTypes.number,
    onBoardsizeChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <Accordion defaultActiveKey="1" >
          <Panel header="Control (auto)" eventKey="1">
            <div className="btn-group btn-group-justified" role="group" aria-label="auto control">
              <div className="btn-group" role="group">
                <button className='btn-start btn-small btn btn-default' style={{color: 'blue'}} onClick={this.props.onStart} title="Start">
                  <i className="fa fa-play" aria-hidden="true"></i>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button className='btn-pause btn-small btn btn-default' onClick={this.props.onPause} title='Pause'>                
                  <i className="fa fa-pause" aria-hidden="true"></i>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button className='btn-resume btn-small btn btn-default' onClick={this.props.onResume} title='Resume'>
                  <i className="fa fa-repeat" aria-hidden="true"></i>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button className='btn-reset btn-small btn btn-default' onClick={this.props.onReset} title='Reset'>              
                  <i className="fa fa-eraser" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <br/>

            <HelpText items={[
              {
                className: "fa fa-play",
                text: "Start the game with a random population, then <u>auto</u> move to new generation"
              },
              {
                className: "fa fa-pause",
                text: "Pause the game"
              },
              {
                className: "fa fa-repeat",
                text: "Resume the game"
              },
              {
                className: "fa fa-eraser",
                text: "Reset to a blank game, if you want to play again then try start"
              }
            ]}/>

          </Panel>
          <Panel header="Control (manual)" eventKey="2">
            <div className="btn-group btn-group-justified" role="group" aria-label="manual control">
              <div className="btn-group" role="group">
                <button className='btn-init btn btn-default' onClick={this.props.onInit} title='Init'>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
              </div>
                <div className="btn-group" role="group">
                <button className='btn-next btn btn-default' onClick={this.props.onNext} title='Next'>
                  <i className="fa fa-step-forward" aria-hidden="true"></i>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button className='btn-reset btn btn-default' onClick={this.props.onReset} title='Reset'>
                  <i className="fa fa-eraser" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <br/>
            
            <HelpText items={[
              {
                className: "fa fa-pencil",
                text: "Init population, you need to click <i class='fa fa-step-forward' aria-hidden='true'></i> to <u>manually</u> move to next generation"
              },
              {
                className: "fa fa-step-forward",
                text: "Manually move to generation"
              },
              {
                className: "fa fa-eraser",
                text: "Reset to a blank game, if you want to play again then try init <i class='fa fa-pencil' aria-hidden='true'></i>"
              }
            ]}/>

          </Panel>
        </Accordion>
        
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Settings</h3>
          </div>
          <div className="panel-body">
            <NumberInput 
              label='Time between generations'
              inputClassName='interval' 
              value={this.props.interval} 
              onSave={this.props.onIntervalChange}
            />
            <NumberInput 
              label='Board size' 
              inputClassName='boardsize'
              value={this.props.boardsize} 
              onSave={this.props.onBoardsizeChange}
            />
          </div>
        </div>        
      </div>      
    )
  }
}

export default Controls