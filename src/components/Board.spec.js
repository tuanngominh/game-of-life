import React from 'react'
import {mount} from 'enzyme'
import Board from './Board'
import Creature from './Creature'

const setup = () => {
  const generation1 = [
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ]

  const props = {
    creatures: generation1,
    boardSize: 4,
    onSetup: jest.fn()
  }

  const wrapper = mount(<Board {...props} />)  

  return {
    wrapper: wrapper,
    props: props
  }
}

it ('generation', () => {
  const {wrapper} = setup()
  expect(wrapper.find(Creature).length).toBe(16)
})

it ('setup cell', () => {
  const {props, wrapper} = setup()
  wrapper.find('div.creature').at(0).simulate('click')
  expect(props.onSetup).toBeCalled()
})