import React, { Component } from 'react';
import {PAGES} from "../../routes/pages";
import { Link } from 'react-router-dom';
import {selectIsLoginFetching, selectLogin} from "../../redux/selectors/true-login-selector";
import {push} from "connected-react-router";
import {fetchLoginErrorAC, fetchLoginStartAC, fetchLoginSuccessAC} from "../../redux/actions/true-login-action";
//import { loginUserAC } from "../../redux/actions/login-action";
import connect from "react-redux/es/connect/connect";


const mapStateToProps = state => ({
   // user: state.login.user,
    trueLogin: selectLogin(state),
    isLoginFetching: selectIsLoginFetching(state),
});

const mapDispatchToProps = dispatch => ({
    //loginUser: user => dispatch(loginUserAC(user)),
    fetchLoginStart: () => dispatch(fetchLoginStartAC()),
    fetchLoginSuccess: trueLogin => dispatch(fetchLoginSuccessAC(trueLogin)),
    fetchLoginError: () => dispatch(fetchLoginErrorAC())
});

class LoginPage extends Component {

    state = {
        login: ''
    };

    handleChange = (e) => {
        const login = e.target.value;
        this.setState({ login });
    };

    // handleClick = () => {
    //     const { loginUser } = this.props;
    //     const { login } = this.state;
    //     loginUser(login);
    // };

    handleFetchLogin = async () => {
        const { fetchLoginError, fetchLoginStart, fetchLoginSuccess } = this.props;
        try {
            fetchLoginStart();
            const { login } = this.state;
            fetchLoginSuccess(login);
            const trueLogin = await fetch('/api/true', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({login: login})
            });
            if (trueLogin.status === 200) {
                console.log(this.state)
                const trueLoginInfo = await trueLogin.text();
                console.log('trueLogin', trueLoginInfo);
                fetchLoginSuccess(trueLoginInfo);
            } else {
                alert('dlkvfl.l')
            }
        } catch (e) {
            console.error(e);
            fetchLoginError();
        }
    };

render() {
        console.log('state', this.state);
        return (
            <div className='login-page'>
                <h3>Login Button</h3>

                <input className='login-field' onChange={this.handleChange}/>

                {/*</Link> <Link to='/'>*/}
                {/*<button*/}
                    {/*onClick={this.handleClick}*/}
                {/*>*/}
                    {/*Login*/}
                {/*</button>*/}

                <Link to={'/'}> <button onClick={this.handleFetchLogin}>Войти по-настоящему</button></Link>
            </div>
        )
    }
}

const VisibleLoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
export default VisibleLoginPage;
