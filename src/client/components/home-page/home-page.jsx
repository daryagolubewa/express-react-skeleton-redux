import React, { Component } from 'react';
import { bemClassNameFactory } from '../../utils/bem';
import '../app/app.css';

const cn = bemClassNameFactory('app');

export default class HomePage extends Component {

  render() {
    return (
      <div className='home-page'>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          {/*<div className={ cn('button-block') } >*/}
              {/*<button className={ cn('button') }>*/}
                  {/*Login*/}
              {/*</button>*/}
          {/*</div>*/}
      </div>
    );
  }
}
