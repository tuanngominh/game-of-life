# Game of life [![CircleCI](https://circleci.com/gh/tuanngominh/game-of-life.svg?style=svg)](https://circleci.com/gh/tuanngominh/game-of-life) [![codecov](https://codecov.io/gh/tuanngominh/game-of-life/branch/master/graph/badge.svg)](https://codecov.io/gh/tuanngominh/game-of-life)


Game implementation on react with Controls and Inspector ability. Play [game](https://tuanngominh.github.io/game-of-life) and check [behind the scene](https://tuanngo.me/2017/01/13/game-of-life/) .

# Game rule
Game rule explain by John Conway: https://www.youtube.com/watch?v=E8kUJL04ELA 

# Todo
- Enable/disable buttons depend on usage
- Ability to have a massive board (e.g 1000 x 1000). Render board using canvas (for render huge amount of item)
- When there is no change in population, show a message and stop calculation
- Build webpack deploy script from scratch, replace one created by create-react-app
- Show test coverage on github code page
- Use webworker to offload the calculation
- When mouse over current board, show mouse over cell on current board and previous board
- Hint: mark which creature will die and which will be born in next gen (make sense when manually move to next generation for testing)
