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
- Ability to setup the board: Manually init creature: Ability to select an element to be born (done)
- Others:
  + Ability to pause game (done)
  + Ability to change board size (done)
  + Ability to change simulation speed (done)

# 2
- Ability to show previous generation as history (done)
  + Only need to show previous version, no need to store all history version
- Show die, born in each generation through a real time chart (2h)
- When there is no change in population, show a message and stop calculation (1h)
- Others 3:
  + Enable/disable buttons depend on usage (1h)

# 3
- Ability to show time spend for each generation. Show in a nice bar chart (2h)
- Revise UI: 
    + buttons, show interval, 
    + remove react default app UI, 
    + show game logic reference, 
    + using icon instead of button label, 
    + group buttons to type: auto and manual. 
    + Show generation == 1, and > 1 differently (using color or icon, may be using with 3D depth, shorter icon with generation 1 and higher icon with generation 2) (1h)
- Using a state management lib like immutable then try with benchmark (4h)
- Build webpack deploy script from scratch, replace one created by create-react-app (4h)


# 4
- Show test coverage on github code page (4h)
- Use webworker to offload the calculation (4h)

# 5
- Hint : mark which creature will die and which will be born in next gen (make sense when manually move to next generation for testing)
- Ability to have massive board : 1000 x 1000
- Others 2:
  + Ability to render board using dom
  + Ability to render board using svg
