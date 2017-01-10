import React from 'react'
import {mount} from 'enzyme'
import Creature from './Creature'
import Game from './Game'


it('Setup cell', () => {

  const wrapper = mount(<Game />)

  //at first, every cell should at generation 0
  expect(wrapper.find(Creature).at(0).props().generation).toBe(0)

  //setup cell generation 1 by click on it
  wrapper.find('div.creature').at(0).simulate('click')
  expect(wrapper.find(Creature).at(0).props().generation).toBe(1)

  //click cell to toggle it's state
  wrapper.find('div.creature').at(0).simulate('click')
  expect(wrapper.find(Creature).at(0).props().generation).toBe(0)
})

it('Start, reset without error', () => {
  const interval = 0.5
  const wrapper = mount(<Game interval={interval} />)

  //click start game will setup a timer to auto move to next generation
  wrapper.find('.btn-start').at(0).simulate('click')
  expect(wrapper.state().timerId).toBeGreaterThan(0)

  setTimeout(() => {
    wrapper.find('.btn-reset').at(0).simulate('click')
  }, interval * 1000)
})

it('Init, next without error', () => {
  const wrapper = mount(<Game />)

  //manually init and go next will not trigger timer
  wrapper.find('.btn-init').at(0).simulate('click')
  expect(wrapper.state().timerId).toBeNull()
  wrapper.find('.btn-next').at(0).simulate('click')
  expect(wrapper.state().timerId).toBeNull()
})

it('change board size', () => {
  const wrapper = mount(<Game />)

  //new boardsize with button click
  let newBoardsize = 11
  wrapper.find('input.input-boardsize').simulate('change', {target: {value: newBoardsize}})
  wrapper.find('.btn-boardsize').simulate('click')

  //update inner creatures array
  expect(wrapper.state().creatures.length).toBe(newBoardsize)
  expect(wrapper.state().creatures[0].length).toBe(newBoardsize)
  //no timer
  expect(wrapper.state().timerId).toBeNull()
})