import React from 'react'
import {mount} from 'enzyme'
import Creature from './Creature'
import Inspector from './Inspector'
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
  const history = wrapper.state().history
  const currentGen = history[0]
  expect(history.length).toBe(1)
  expect(currentGen.length).toBe(newBoardsize)
  expect(currentGen[0].length).toBe(newBoardsize)
  //no timer
  expect(wrapper.state().timerId).toBeNull()
})

it('game history: start, pause', () => {
  const interval = 0.5
  const wrapper = mount(<Game interval={interval} />)
  wrapper.find('.btn-start').at(0).simulate('click')
  setTimeout(() => {
    wrapper.find('.btn-pause').at(0).simulate('click')
    expect(wrapper.state().history.length).toBe(2)
  }, interval * 2 * 1000)  
})

it('game history: init, next', () => {
  const wrapper = mount(<Game />)
  wrapper.find('.btn-init').at(0).simulate('click')
  expect(wrapper.state().history.length).toBe(1)

  wrapper.find('.btn-next').at(0).simulate('click')
  expect(wrapper.state().history.length).toBe(2)  
})

it('toggle inspector', () => {
  const wrapper = mount(<Game />)

  //manually init, move to next gen so we have previous generation
  wrapper.find('.btn-init').at(0).simulate('click')
  wrapper.find('.btn-next').at(0).simulate('click')
  expect(wrapper.state().history.length).toBe(2)

  //turn inspector ON
  wrapper.find('.toggle-inspector').at(0).simulate('change', {target: {checked: true}})
  expect(wrapper.find(Inspector).length).toBe(1)

  //turn inspector OFF
  wrapper.find('.toggle-inspector').at(0).simulate('change', {target: {checked: false}})
  expect(wrapper.find(Inspector).length).toBe(0)
})