import React, { Component } from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';

const cn = bemClassNameFactory('app');

export default class App extends Component {
  static propTypes = {
    appName: Type.string,
    children: Type.node.isRequired
  };

  static defaultProps = {
    appName: 'Default Name'
  };

  state = {
    buttonActive: false
  };

  handleClickButton = () => {
    const { buttonActive } = this.state;
    console.log(buttonActive);
    this.setState({ buttonActive: !buttonActive });
  };

  componentDidMount() {
    const fetchFunc = async () => {
      const res = await fetch('/api/test');
      console.log(res);
      return res;
    };
    fetchFunc();
  }

  render() {
    const { appName, children } = this.props;
    console.log(this.props);
    return (
      <div className={ cn() }>
        <h1>{ appName }</h1>
        <div className={ cn('header') }>
          <div className={ cn('logo') }>
            <img src={ elbrusImg } height='200px' />
          </div>
          <div className={ cn('menu') }>
            <h2>Menu</h2>
            <div><Link to={ PAGES.home.path }>Home Page</Link></div>
            <div><Link to={ PAGES.info.path }>Info Page</Link></div>
            <div><Link to={ PAGES.page404.path }>Page 404</Link></div>
          </div>
          <div className={ cn('button-block') }>
            <h2>Test Button</h2>
            <button
              className={ cn('button', this.state.buttonActive ? 'blue' : 'green') }
              onClick={ this.handleClickButton }
            >
              Click Me
            </button>
          </div>
        </div>
        { children }
        <div className={ cn('footer') }>
        </div>
      </div>
    );
  }
}
