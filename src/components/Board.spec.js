import React from 'react'
import {mount} from 'enzyme'
import Board from './Board'
import Creature from './Creature'

const generation1 = [
  [0, 1, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
]

it ('generation', () => {
  const wrapper = mount(<Board boardSize={4} creatures={generation1} />)
  expect(wrapper.find(Creature).length).toBe(16)
})

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
  const wrapper = mount(<Board boardSize={4} {...actions} creatures={generation1} />)

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


  //check setup  
  wrapper.find('div.creature').at(0).simulate('click')
  expect(actions.onSetup).toBeCalled()
})