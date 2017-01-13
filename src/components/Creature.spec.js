import React from 'react'
import {mount} from 'enzyme'
import Creature from './Creature'

it ('generation', () => {
  const props = {
    cellSize: 2,
    onClick: jest.fn()
  }
  expect(mount(<Creature generation={0} {...props} />).find('.creature.generation-0').length).toBe(1)

  expect(mount(<Creature generation={1} {...props} />).find('.creature.generation-1').length).toBe(1)

  expect(mount(<Creature generation={2} {...props} />).find('.creature.generation-2').length).toBe(1)

  expect(mount(<Creature generation={3} {...props} />).find('.creature.generation-2').length).toBe(1)

})


it ('event', () => {
  const onClick = jest.fn()
  const wrapper = mount(<Creature 
    cellSize={2}
    generation={0} 
    onClick={onClick}
  />)
  wrapper.find('div').at(0).simulate('click')
  expect(onClick).toBeCalled()
})