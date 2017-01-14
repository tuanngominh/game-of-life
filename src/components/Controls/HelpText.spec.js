import React from 'react'
import {mount} from 'enzyme'
import HelpText from './HelpText'

it ('toggle help text', () => {
  const wrapper = mount(<HelpText items={[{
    className: "sample-class",
    text: "sample-text"
  }]} />)

  expect(wrapper.state().showHelp).toBe(false)
  
  wrapper.find('a').at(0).simulate('click')
  expect(wrapper.state().showHelp).toBe(true)
})