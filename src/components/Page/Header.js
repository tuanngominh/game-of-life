import React, {PureComponent} from 'react'

class Header extends PureComponent {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 text-center'>
          <h2>
            Game of Life (<a href="https://github.com/tuanngominh/game-of-life" target="_blank">code</a>)
          </h2>
          <hr/>
        </div>
      </div>
    )
  }
}

export default Header