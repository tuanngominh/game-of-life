function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomFirstGeneration = (boardSize) => {
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