import React, {PureComponent, PropTypes} from 'react'

class Creature extends PureComponent {
  static propTypes = {
    generation: PropTypes.number.isRequired,
    cellSize: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      generationClass: this.getClassNameFromGeneration(props.generation)
    } 
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      (this.props.generation === nextProps.generation)
      && (this.props.cellSize === nextProps.cellSize)
    ) {
      return false
    }
    return true
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
    const className = 'creature ' + this.state.generationClass + ' cellsize-' + this.props.cellSize
    return (
      <div 
        className={className} 
        data-generation={this.props.generation} 
        onClick={this.props.onClick}
      />
    )
  }
}

export default Creature