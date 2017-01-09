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

it('change board size, interval', () => {
  const onBoardsizeChange = jest.fn(), onIntervalChange = jest.fn();
  const wrapper = mount(<Controls 
    boardsize={10} 
    interval={2}
    onBoardsizeChange={onBoardsizeChange} 
    onIntervalChange={onIntervalChange}
  />)
  //new boardsize
  const newBoardsize = 11
  wrapper.find('input.input-boardsize').simulate('change', {target: {value: newBoardsize}})
  wrapper.find('.btn-boardsize').simulate('click')
  expect(onBoardsizeChange).toBeCalledWith(newBoardsize)

  //new interval
  const newInterval = 3
  wrapper.find('input.input-interval').simulate('change', {target: {value: newInterval}})
  wrapper.find('input.input-interval').simulate('keyup', {'keyCode': 13})
  expect(onIntervalChange).toBeCalledWith(newInterval)

})