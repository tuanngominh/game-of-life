import React from 'react'
import {mount} from 'enzyme'
import Inspector from './Inspector'
import Board from './Board'
import DieBornRate from './Inspector/DieBornRate'

it('just render', () => {
  const generation1 = [
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ]
  const generation2 = [
    [0, 0, 1, 0],
    [1, 2, 0, 0],
    [0, 2, 2, 0],
    [0, 0, 0, 0]
  ]

  const wrapper = mount(<Inspector 
    previousGen={generation1} 
    currentGen={generation2} 
    boardSize={4}
  />)
  expect(wrapper.find(Board).length).toBe(1)
  expect(wrapper.find(DieBornRate).length).toBe(1)
})