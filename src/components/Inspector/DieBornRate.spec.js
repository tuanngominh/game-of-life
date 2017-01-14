import React from 'react'
import {mount} from 'enzyme'
import DieBornRate from './DieBornRate'
import {LineChart} from 'recharts'

it ('die born rate line chart', () => {
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
  const generation3 = [
    [0, 1, 0, 0],
    [2, 0, 0, 0],
    [1, 2, 2, 0],
    [0, 0, 0, 0]
  ]
  const generation4 = [
    [0, 0, 0, 0],
    [2, 0, 1, 0],
    [2, 2, 0, 0],
    [0, 1, 0, 0]
  ]

  const wrapper = mount(<DieBornRate 
    previousGen={generation1} 
    currentGen={generation2} 
    historyLength={2}
  />)
  expect(wrapper.find(LineChart).length).toBe(1)
  expect(wrapper.state('data').length).toBe(1)

  //no change between generations 
  wrapper.setProps({
    previousGen: generation2,
    currentGen: generation2
  })
  expect(wrapper.state('data').length).toBe(1)

  //there is change between generations
  wrapper.setProps({
    previousGen: generation2,
    currentGen: generation3
  })
  expect(wrapper.state('data').length).toBe(2)

  //reach history limit
  wrapper.setProps({
    previousGen: generation3,
    currentGen: generation4
  })
  expect(wrapper.state('data').length).toBe(2)

  //reset chart as no previous gen
  wrapper.setProps({
    previousGen: null,
    currentGen: generation3
  })
  expect(wrapper.state('data')[0]).toEqual({die: 0, born: 0, gen: 0})
  expect(wrapper.state('gen')).toBe(0)
})