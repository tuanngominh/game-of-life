import React from 'react'
import {dieOrBorn, buildBlankWorld, randomGeneration} from './utils'

it ('Die or Born in next generation', () => {
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
  
  expect(dieOrBorn(generation1, 4)).toEqual(generation2)
  expect(dieOrBorn(generation2, 4)).toEqual(generation3)
})

it ('Build a blank world', () => {
  const boardSize = 4
  const blank = buildBlankWorld(boardSize)
  expect(blank.length).toBe(boardSize)
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      expect(blank[x][y]).toBe(0)
    }
  }
})

it ('Randomize a generation', () => {
  const boardSize = 4
  const random = randomGeneration(boardSize)
  expect(random.length).toBe(boardSize)
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      expect(random[x][y]).not.toBe(undefined)
    }
  }
})