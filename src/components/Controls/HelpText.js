import React, {PureComponent} from 'react'

class HelpText extends PureComponent {
  constructor() {
    super()
    this.state = {
      showHelp: false
    }
  }
  toggleHelp = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        showHelp : !prevState.showHelp
      }
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    //We never changes help text content later so just return false
    //We need this method even we use PureComponent as React shallow compare doesn't 
    //  work with this component's Items props
    return false
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