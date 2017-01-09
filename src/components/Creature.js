import React, {Component} from 'react'

class Creature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      generationClass: this.getClassNameFromGeneration(props.generation)
    } 
  }
  getClassNameFromGeneration(generation) {
    if (generation === 0 || generation === 1) {
      return 'generation-' + generation
    }
    return 'generation-2'
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      generationClass: this.getClassNameFromGeneration(nextProps.generation)
    })
  }
  render() {
    const className = 'creature ' + this.state.generationClass
    return (
      <div className={className} data-generation={this.props.generation} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}

export default Creature