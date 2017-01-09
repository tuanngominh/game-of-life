Game of life on react, [play game](https://tuanngominh.github.io/game-of-life).

# Game rule
Game rule explain by John Conway: https://www.youtube.com/watch?v=E8kUJL04ELA 

# Spec
- Show a square board of element (done)
- Can show current generation (done)
- Ability to detect if an element should die (done)
- Ability to detect if an element should be born (done)
- Ability to move to next generation (done)
- Manually move to next generation (done)
- Manually start/stop the game (done)
- Manually init creature: Ability to select an element to be born
- Others:
  + Ability to pause game
  + Ability to change board size
  + Ability to change simulation speed
- When there is no change in population, show a message and stop calculation
- Show die, born in each generation through a real time chart
- Others 3:
  + Enable/disable buttons depend on usage
- Revise UI: buttons, show interval, remove react default app UI, show game logic reference
- Ability to show previous generation
- Build webpack deploy script from scratch, replace one created by create-react-app
- Using a state management lib like immutable then try with benchmark
- Show test coverage on github code page
- Use webworker to offload the calculation
- Hint : mark which creature will die and which will be born in next gen (make sense when manually move to next generation for testing)
- Ability to have massive board : 1000 x 1000
- Others 2:
  + Ability to render board using dom
  + Ability to render board using svg
  + Ability to show time spend for each generation
