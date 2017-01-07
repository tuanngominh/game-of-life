import React from 'react'
import {mount} from 'enzyme'
import Board from './Board'
import Creature from './Creature'

it ('generation', () => {
  const generation1 = [
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ]
  const wrapper = mount(<Board boardSize={4} creatures={generation1} timer={false} />)
  expect(wrapper.find(Creature).length).toBe(16)
})