import React from 'react'
import {mount} from 'enzyme'
import Creature from './Creature'

it ('generation', () => {
  expect(mount(<Creature generation={0}/>).find('.creature.generation-0').length).toBe(1)

  expect(mount(<Creature generation={1}/>).find('.creature.generation-1').length).toBe(1)

  expect(mount(<Creature generation={2}/>).find('.creature.generation-2').length).toBe(1)

  expect(mount(<Creature generation={3}/>).find('.creature.generation-2').length).toBe(1)

})


it ('event', () => {
  const onClick = jest.fn()
  const wrapper = mount(<Creature 
    generation={0} 
    onClick={onClick}
  />)
  wrapper.find('div').at(0).simulate('click')
  expect(onClick).toBeCalled()
})