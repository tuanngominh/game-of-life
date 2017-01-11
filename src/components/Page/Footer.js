import React from 'react'

const Footer = () => (
  <div className="row">
    <div className='col-xs-12'>
      <hr/>
      <p>
        Implementation of famous <a href="https://www.youtube.com/watch?v=E8kUJL04ELA" target="_blank">Game Of Life</a> which is invented by John Conway.
      </p>
      <p>
        Check full code on <a href="https://github.com/tuanngominh/game-of-life" target="_blank">github</a>. The game is written on <a href="https://facebook.github.io/react/" target="_blank">react</a>.
      </p>            
    </div>
    <div className='col-sm-6 col-sm-offset-3'>
      <img className="img-responsive" src="//i.ytimg.com/vi/E8kUJL04ELA/maxresdefault.jpg" alt="John Conway portrait"/>
    </div>
  </div>
)

export default Footer