import React from 'react'
import {dieOrBorn} from './utils'

it ('generation', () => {
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
  
  expect(dieOrBorn(generation1, 4)).toEqual(generation2)
})