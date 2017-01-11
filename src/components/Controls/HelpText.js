import React, {Component} from 'react'

class HelpText extends Component {
  constructor() {
    super()
    this.state = {
      showHelp: false
    }
  }
  toggleHelp = () => {
    this.setState(prevState => {
      return {
        showHelp : !prevState.showHelp
      }
    })
  }
  render() {
    return (
      <div className="explanation">
        <a href="#" onClick={this.toggleHelp}>{(this.state.showHelp) ? 'Hide help' : 'Show help'}</a>
        <div style={(this.state.showHelp) ? {display: 'block'} : {display: 'none'}}>
          <br/>
        {this.props.items.map((item) => (
          <p key={item.className}>
            <i className={item.className} aria-hidden="true"></i>{'  '}
            <span dangerouslySetInnerHTML={{__html:item.text}} />
          </p>
        ))}
        </div>
      </div>      
    )
  }
}

export default HelpText