import React, { Component } from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';

export default class App extends Component {
  static propTypes = {
    appName: Type.string,
    children: Type.node.isRequired
  };

  static defaultProps = {
    appName: 'Default Name'
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
    return (
      <div className='app'>
        <h1>{ appName }</h1>
        <img src={ elbrusImg } height='200px' />
        <div><Link to={ PAGES.home.path }>Home Page</Link></div>
        <div><Link to={ PAGES.info.path }>Info Page</Link></div>
        <div><Link to={ PAGES.page404.path }>Page 404</Link></div>
        <p>-----HEADER-----</p>
        { children }
        <p>-----FOOTER-----</p>
      </div>
    );
  }
}
