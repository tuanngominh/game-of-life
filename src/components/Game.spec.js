import React from 'react'
import {mount} from 'enzyme'
import Creature from './Creature'
import Game from './Game'


it('Setup cell', () => {

  const wrapper = mount(<Game />)
  expect(wrapper.find(Creature).at(0).props().generation).toBe(0)

  wrapper.find('div.creature').at(0).simulate('click')
  expect(wrapper.find(Creature).at(0).props().generation).toBe(1)

  wrapper.find('div.creature').at(0).simulate('click')
  expect(wrapper.find(Creature).at(0).props().generation).toBe(0)
})

it('Start, reset without error', () => {
  const interval = 0.5
  const wrapper = mount(<Game interval={interval} />)
  wrapper.find('.btn-start').at(0).simulate('click')
  setTimeout(() => {
    wrapper.find('.btn-reset').at(0).simulate('click')
  }, interval * 1000)
})

it('Init, next without error', () => {
  const wrapper = mount(<Game />)
  wrapper.find('.btn-init').at(0).simulate('click')
  wrapper.find('.btn-next').at(0).simulate('click')
})