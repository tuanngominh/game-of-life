import React from 'react'
import {mount} from 'enzyme'
import Controls from './Controls'

it ('button clicks', () => {
  const actions = {
    onStart: jest.fn(),
    onReset: jest.fn(),
    onPause: jest.fn(),
    onResume: jest.fn(),
    onInit: jest.fn(),
    onNext: jest.fn(),
    onSetup: jest.fn()
  }
  const wrapper = mount(<Controls {...actions} />)

  const buttonCallbackMaps = {
    '.btn-start': actions.onStart,
    '.btn-reset': actions.onReset,
    '.btn-pause': actions.onPause,
    '.btn-resume': actions.onResume,
    '.btn-init': actions.onInit,
    '.btn-next': actions.onNext,
  }
  for (let btnName in buttonCallbackMaps) {
    wrapper.find(btnName).at(0).simulate('click')
    expect(buttonCallbackMaps[btnName]).toBeCalled()    
  }

})