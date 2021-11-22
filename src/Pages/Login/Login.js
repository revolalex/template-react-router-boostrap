import React from "react";
import { Container } from "react-bootstrap";
import './Login.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import SignUp from "./SignUp";
// allow to connect the component to redux store
import { connect } from "react-redux";
// Action to redux store
import { setToken, setUsername, setPassword, setAuth } from "../../Store/actions/user";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: '',
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.submitUserLogin = this.submitUserLogin.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    componentDidMount() {
        const switchers = [...document.querySelectorAll('.switcher')]
        switchers.forEach(item => {
            item.addEventListener('click', function () {
                switchers.forEach(item => item.parentElement.classList.remove('is-active'))
                this.parentElement.classList.add('is-active')
            })
        })
    }
    handleUsername(event) {
        this.setState({ username: event.target.value })
    }
    handlePassword(event) {
        this.setState({ password: event.target.value })
    }
    resetState() {
        this.setState({
            username: '',
            password: '',
        })
    }

    async submitUserLogin(event) {
        event.preventDefault();
        await axios.post('http://localhost:8000/token-auth/', this.state)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    this.setState({ token: res.data.token })
                    this.setState({ username: res.data.user.username })
                    this.props.setToken(res.data.token);
                    this.props.setPassword(this.state.password)
                    this.props.setUsername(this.state.username)
                    this.props.setAuth(true)
                    this.notify()
                    this.resetState()
                    const push = ()=> {return this.props.history.push('/')}
                    setTimeout(function(){ push() }, 2500);
                }
                this.resetState()
            })
    }
    notify = () => toast.success("You are login", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    notifyError = (message) => toast.error(message || "Something went wrong", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });


    render() {
        return (
            <div className="login-background" style={{ paddingTop: '80px' }}>
                <Container >
                    <section class="forms-section">
                        <h1 class="section-title">Welcome to the ultime articles dashboard</h1>
                        <div class="forms">
                            <div class="form-wrapper is-active">
                                <button type="button" class="switcher switcher-login" style={{ opacity: "1" }}>
                                    Login
                                    <span class="underline"></span>
                                </button>
                                <form class="form form-login">
                                    <fieldset>
                                        <legend>Please, enter your email and password for login.</legend>
                                        <div class="input-block">
                                            <label for="login-username">Username</label>
                                            <input id="login-username" type="username" value={this.state.username} onChange={this.handleUsername} required />
                                        </div>
                                        <div class="input-block">
                                            <label for="login-password">Password</label>
                                            <input id="login-password" type="password" value={this.state.password} onChange={this.handlePassword} required />
                                        </div>
                                    </fieldset>
                                    <button type="submit" class="btn-login" onClick={this.submitUserLogin}>Login</button>
                                </form>
                            </div>
                            <SignUp className="switcher" />
                        </div>
                    </section>
                </Container >
            </div>
        );
    }
}

//connect to redux state
const mapStateToProps = (state) => ({
    token: state.userReducer.token,
    password: state.userReducer.password,
    username: state.userReducer.username,
    auth: state.userReducer.auth

});

// connect to action of redux
const mapDispatchToProps = {
    setToken, setUsername, setPassword, setAuth
};

// connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Login);

