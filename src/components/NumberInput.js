import React, {Component} from 'react'

class NumberInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    this.validation(e.target.value)
  }
  validation(val) {
    let isValid = true
    if (val === '') {
      this.error.innerHTML = 'Can not be empty'
      isValid = false
    } else if (isNaN(val)) {
      this.error.innerHTML = 'Require a number' 
      isValid = false
    } else {
      this.error.innerHTML = null 
    }
    return isValid
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {

      if (this.validation(this.state.value)) {
        console.log(this.state.value)
        this.props.onSave(parseInt(this.state.value, 10))   
      }
    }
  }
  handleSaveButtonClick(e) {
    if (this.validation(this.state.value)) {
      this.props.onSave(parseInt(this.state.value, 10))   
    }
  }
  render() {
    return (
      <div>
          {this.props.label}: <input 
            className={'input-' + this.props.inputClassName}
            value={this.state.value} 
            onChange={this.handleChange} 
            onKeyUp={this.handleKeyUp}
          />
          <button 
            className={'btn-' + this.props.inputClassName}
            onClick={this.handleSaveButtonClick}
          >
          Apply 
          </button>
          <br/>
          <span className='error' ref={(node) => {this.error = node}} />
      </div>        
    )
  }
}

export default NumberInput