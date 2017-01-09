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

it('change board size', () => {
  const onBoardsizeChange = jest.fn()
  const wrapper = mount(<Controls boardsize={10} onBoardsizeChange={onBoardsizeChange} />)

  //new boardsize with button click
  let newBoardsize = 11
  wrapper.find('input.boardsize').simulate('change', {target: {value: newBoardsize}})
  wrapper.find('.btn-boardsizechange').simulate('click')
  expect(onBoardsizeChange).toBeCalledWith(newBoardsize)

  //new boardsize with enter key
  newBoardsize = 12
  wrapper.find('input.boardsize').simulate('change', {target: {value: newBoardsize}})
  wrapper.find('input.boardsize').simulate('keyup', {'keyCode': 13})
  expect(onBoardsizeChange).toBeCalledWith(newBoardsize)

})