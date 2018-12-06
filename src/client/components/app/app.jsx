import React, { Component } from 'react';
import { connect } from 'react-redux';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import { sayByeAC, sayHiAC } from '../../redux/actions/app-actions';
import { fetchUserStartAC, fetchUserSuccessAC, fetchUserErrorAC } from '../../redux/actions/user-actions';
import { selectSay } from '../../redux/selectors/app-selectors';
import { selectPathname } from '../../redux/selectors/router-selectors';
import { selectUser, selectIsUserFetching } from '../../redux/selectors/user-selectors';
import './app.css';
import {selectLogin, selectIsLoginFetching} from "../../redux/selectors/true-login-selector";

const cn = bemClassNameFactory('app');

const mapStateToProps = state => ({
    say: selectSay(state),
    pathname: selectPathname(state),
    userInfo: selectUser(state),
    isUserFetching: selectIsUserFetching(state),
    login: state.login.user,
    trueLogin: selectLogin(state) || '',
    isLoginFetching: selectIsLoginFetching(state),
});


const mapDispatchToProps = dispatch => ({
    sayBye: () => dispatch(sayByeAC()),
    sayHi: () => dispatch(sayHiAC()),
    doRoute: page => dispatch(push(page)),
    fetchUserStart: () => dispatch(fetchUserStartAC()),
    fetchUserSuccess: user => dispatch(fetchUserSuccessAC(user)),
    fetchUserError: () => dispatch(fetchUserErrorAC())
});

class App extends Component {
  static propTypes = {
    appName: Type.string,
    children: Type.node.isRequired,
    say: Type.string,
    pathname: Type.string,
    userInfo: Type.shape({
      name: Type.string,
      email: Type.string
    }),
    isUserFetching: Type.bool,
    sayHi: Type.func,
    sayBye: Type.func,
    doRoute: Type.func,
    fetchUserStart: Type.func,
    fetchUserSuccess: Type.func,
    fetchUserError: Type.func
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

  handleRouteToInfoPage = () => {
    this.props.doRoute(PAGES.info.path);
  };

  handleRouteToPage404 = () => {
    this.props.doRoute(PAGES.page404.path);
  };

  fetchUser = async () => {
    const { fetchUserStart, fetchUserSuccess, fetchUserError } = this.props;
    try {
      fetchUserStart();
      const user = await fetch(PAGES.API.fetchUser.path);
      const userInfo = await user.json();
      console.log('userInfo', userInfo);
      fetchUserSuccess(userInfo);
    } catch (e) {
      console.error(e);
      fetchUserError();
    }
  };

  componentDidMount() {
    // this.fetchUser();
  }

  print = () => {
      console.log(this.props)
  }
  render() {
    const {
      appName,
      children
    } = this.props;
    console.log(this.props);
    return (
      <div className={ cn() }>
        <h1>{ appName }</h1>
        <div className={ cn('header') }>
          <div className={ cn('logo') }>
            <img src={ elbrusImg } height='200px' />
              <p>  </p>
              <div>
                  {
                      this.props.isLoginFetching
                      && <div>Loading</div>
                  }
              </div>
              <div>{this.print()}</div>
              <b>User</b>:
              { this.props.trueLogin && (
                  <div>{this.props.trueLogin.name}</div>
              )}
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
            { this.renderSayButtons() }
            { this.renderRoutingButtons() }
            { this.renderUserButtons() }
          </div>
        </div>
        { children }
        <div className={ cn('footer') }>
        </div>
      </div>
    );
  }

  renderSayButtons() {
    return (
      <div>
        <h3>Say Buttons</h3>
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
          { this.props.say }
        </div>
      </div>
    );
  }

  renderRoutingButtons() {
    return (
      <div>
        <h3>Router Push Buttons</h3>
        <div>
          <button
            className={ cn('button', 'red') }
            onClick={ this.handleRouteToInfoPage }
          >
            Go to Info page
          </button>
        </div>
        <div>
          <button
            className={ cn('button', 'red') }
            onClick={ this.handleRouteToPage404 }
          >
            Go to Page 404
          </button>
        </div>
        <div>
          <b>Pathname</b>: { this.props.pathname }
        </div>
      </div>
    );
  }

  renderUserButtons() {
    const { userInfo, isUserFetching } = this.props;
    return (
      <div>
        <h3>User Buttons</h3>
        <div>
          <button
            className={ cn('button', 'red') }
            onClick={ this.fetchUser }
          >
            Fetch user
          </button>
        </div>
        <div>
          {
            isUserFetching
            && <div>Loading</div>
          }
          <b>User</b>: { userInfo.name }
        </div>
      </div>
    );
  }

    renderGetWeatherButton() {

    }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default VisibleApp;
