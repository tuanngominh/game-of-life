import React, {Component} from 'react'

class Creature extends Component {
  constructor(props) {
    super(props)
    
    let backgroundColor
    if (props.generation === 0) {
      backgroundColor = 'white'
    } else if (props.generation === 1) {
      backgroundColor = 'black'
    } else {
      backgroundColor = 'grey'
    }
    this.state = {
      style: {
        backgroundColor : backgroundColor
      }
    } 
  }
  render() {
    return (
      <div className='creature' style={this.state.style}>
        {this.props.children}
      </div>
    )
  }
}

export default Creature