function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomGeneration = (boardSize) => {
  let creatureArrs = []
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      if (creatureArrs[x] === undefined) {
        creatureArrs[x] = []
      }      
      const ran = getRandomIntInclusive(0, boardSize - 1)
      if (x < ran || y < ran) {        
        creatureArrs[x][y] = 1
      } else {
        creatureArrs[x][y] = 0
      }
    }
  }
  return creatureArrs
}

const getNeighborCount = (x, y, creatures, boardSize) => {
  //some neighbors may have incorrect coordinate, we will ignore them later
  const neighborCoords = [
    {x: x-1, y: y-1}, {x: x-1, y: y},      {x: x-1, y: y+1},
    {x: x, y: y-1}, /* current creature */ {x: x, y: y+1},
    {x: x+1, y: y-1}, {x: x+1, y: y},      {x: x+1, y: y+1}
  ]
  let neighborCount = 0
  neighborCount = neighborCoords.reduce((neighborCount, neighborCoord) => {
    if (
        neighborCoord.x >= 0 && 
        neighborCoord.x < boardSize && 
        neighborCoord.y >= 0 && 
        neighborCoord.y < boardSize
      ) {
      if (creatures[neighborCoord.x][neighborCoord.y] > 0) {
        neighborCount++
      }
    } 
    return neighborCount
  }, 0)
  return neighborCount
}

const shouldDie = (x, y, creatures, boardSize) => {
  const neighborCount = getNeighborCount(x, y, creatures, boardSize)

  //die because of no socialize enough
  if (neighborCount <= 1) {
    return true
  }
  
  //die of too crowded, (too noisy and less food)
  if (neighborCount >= 4) {
    return true
  }
}

const shouldBorn = (x, y, creatures, boardSize) => {
  const neighborCount = getNeighborCount(x, y, creatures, boardSize)

  //have good enough number of neighbor
  if (neighborCount === 3) {
    return true
  }
}

export const dieOrBorn = (thisGen, boardSize) => {
  let nextGen = [];
  for (let x = 0; x < boardSize; x++) {
    if (nextGen[x] === undefined) {
      nextGen[x] = []
    }
    for (let y = 0; y < boardSize; y++) {
      //found a living guy
      if (thisGen[x][y] > 0) {
        if (shouldDie(x, y, thisGen, boardSize)) {
          nextGen[x][y] = 0
        } else {
          //get older
          nextGen[x][y] = thisGen[x][y] + 1
        }        
      } 
      //no one live here, should we have new guy ?
      else {
        if (shouldBorn(x, y, thisGen, boardSize)) {
          //new guy born
          nextGen[x][y] = 1
        } else {
          //still no one live
          nextGen[x][y] = 0
        }
      }
    }
  }
  return nextGen
}

export const buildBlankWorld = (boardSize) => {
  boardSize = parseInt(boardSize, 10)
  let generation = []
  for (let x = 0; x < boardSize; x++) {
    generation[x] = Array(boardSize).fill(0)
  }
  return generation
}