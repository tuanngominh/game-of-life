import React from 'react'
import {mount} from 'enzyme'
import NumberInput from './NumberInput'

it('change value', () => {
  const onSave = jest.fn()

  const value = 1
  const wrapper = mount(<NumberInput 
    label='Value'
    inputClassName='value' 
    value={value} 
    onSave={onSave}    
   />)

  //new value with button click
  let newValue = 11
  wrapper.find('input.input-value').simulate('change', {target: {value: newValue}})
  wrapper.find('.btn-value').simulate('click')
  expect(onSave).toBeCalledWith(newValue)

  //new boardsize with enter key
  newValue = 12
  wrapper.find('input.input-value').simulate('change', {target: {value: newValue}})
  wrapper.find('input.input-value').simulate('keyup', {'keyCode': 13})
  expect(onSave).toBeCalledWith(newValue)

  //validation empty
  newValue = ''
  wrapper.find('input.input-value').simulate('change', {target: {value: newValue}})  
  expect(wrapper.find('.error').text().length).toBeGreaterThan(0)

  //clear validation error
  newValue = 1
  wrapper.find('input.input-value').simulate('change', {target: {value: newValue}})  
  expect(wrapper.find('.error').text().length).toBe(0)

  //validation not a number
  newValue = 'a'
  wrapper.find('input.input-value').simulate('change', {target: {value: newValue}})  
  expect(wrapper.find('.error').text().length).toBeGreaterThan(0)  

})