import React from 'react'
import {mount} from 'enzyme'
import Board from './Board'
import Creature from './Creature'
import {buildBlankWorld} from '../lib/utils.js'

const setup = (boardSize = 4) => {
  const generation1 = buildBlankWorld(boardSize)

  const props = {
    creatures: generation1,
    boardSize: boardSize,
    onSetup: jest.fn()
  }

  const wrapper = mount(<Board {...props} />)  

  return {
    wrapper: wrapper,
    props: props
  }
}

it ('generation', () => {
  const boardSizes = [40, 80, 120, 180, 181]
  boardSizes.forEach(boardSize => {
    const {wrapper} = setup(boardSize)
    expect(wrapper.find(Creature).length).toBe(boardSize * boardSize)    
  })
})

it ('setup cell', () => {
  const {props, wrapper} = setup()
  wrapper.find('div.creature').at(0).simulate('click')
  expect(props.onSetup).toBeCalled()
})