import React from 'react'
import {mount} from 'enzyme'
import Controls from './Controls'

const setup = () => {
  const actions = {
    onStart: jest.fn(),
    onReset: jest.fn(),
    onPause: jest.fn(),
    onResume: jest.fn(),
    onInit: jest.fn(),
    onNext: jest.fn(),
    onSetup: jest.fn(),
    onIntervalChange: jest.fn(),
    onBoardsizeChange: jest.fn()
  }
  const wrapper = mount(<Controls {...actions} boardsize={10} interval={2} />)

  return {
    actions : actions,
    wrapper: wrapper
  }
}
it ('button clicks', () => {
  const {actions, wrapper} = setup()

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

it('change board size, interval', () => {
  const {actions, wrapper} = setup()
  //new boardsize
  const newBoardsize = 11
  wrapper.find('input.input-boardsize').simulate('change', {target: {value: newBoardsize}})
  wrapper.find('.btn-boardsize').simulate('click')
  expect(actions.onBoardsizeChange).toBeCalledWith(newBoardsize)

  //new interval
  const newInterval = 3
  wrapper.find('input.input-interval').simulate('change', {target: {value: newInterval}})
  wrapper.find('input.input-interval').simulate('keyup', {'keyCode': 13})
  expect(actions.onIntervalChange).toBeCalledWith(newInterval)

})