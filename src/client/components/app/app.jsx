import React, { Component } from 'react';
import { connect } from 'react-redux';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import { sayByeAC, sayHiAC } from '../../redux/actions/app-actions';
import { selectSay } from '../../redux/selectors/app-selectors';
import './app.css';

const cn = bemClassNameFactory('app');

const mapStateToProps = state => ({
  say: selectSay(state)
});

const mapDispatchToProps = dispatch => ({
  sayBye: () => dispatch(sayByeAC()),
  sayHi: () => dispatch(sayHiAC())
});

class App extends Component {
  static propTypes = {
    appName: Type.string,
    children: Type.node.isRequired,
    sayHi: Type.func,
    sayBye: Type.func,
    say: Type.string
  };

  static defaultProps = {
    appName: 'Default Name'
  };

  state = {
    buttonActive: false
  };

  handleClickButton = () => {
    const { buttonActive } = this.state;
    this.setState({ buttonActive: !buttonActive });
  };

  handleClickSayHi = () => {
    this.props.sayHi();
  };

  handleClickSayBye = () => {
    this.props.sayBye();
  };

  componentDidMount() {
    const fetchFunc = async () => {
      const res = await fetch('/api/test');
      return res;
    };
    fetchFunc();
  }

  render() {
    const { appName, children, say } = this.props;
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
          <div className={ cn('button-block') }>
            <h2>Buttons Redux</h2>
            <div>
              <button
                className={ cn('button', 'red') }
                onClick={ this.handleClickSayHi }
              >
                Say Hi
              </button>
            </div>
            <div>
              <button
                className={ cn('button', 'red') }
                onClick={ this.handleClickSayBye }
              >
                Say Bye
              </button>
            </div>
            <div>
              { say }
            </div>
          </div>
        </div>
        { children }
        <div className={ cn('footer') }>
        </div>
      </div>
    );
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default VisibleApp;
