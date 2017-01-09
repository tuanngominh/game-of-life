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

it ('setup cell', () => {
  const actions = {
    onSetup: jest.fn()
  }
  const wrapper = mount(<Board boardSize={4} {...actions} creatures={generation1} />)

  wrapper.find('div.creature').at(0).simulate('click')
  expect(actions.onSetup).toBeCalled()
})