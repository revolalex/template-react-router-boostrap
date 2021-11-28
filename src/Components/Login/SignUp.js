import React from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../Pages/Login/Login.css'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            token: '',
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.submitUserSignUp = this.submitUserSignUp.bind(this)
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
        this.resetState = this.resetState.bind(this)
        this.handlePasswordConfirmValid = this.handlePasswordConfirm.bind(this)
    }
    handlePasswordConfirmValid(){
        const {confirmPassword, password} = this.state
        if(confirmPassword === password){
            return true
        }
        return false

    }

    handleUsername(event) {
        this.setState({ username: event.target.value })
    }
    handlePassword(event) {
        this.setState({ password: event.target.value })
    }
    handlePasswordConfirm(event) {
        this.setState({ confirmPassword: event.target.value })
    }
    resetState(){
        this.setState({
            username: '',
            password: '',
            confirmPassword: '',
        })
    }

    // fixme ned good url
    async submitUserSignUp(event) {
        const clickSwitch = () => { document.querySelector('.switcher-login').click() }
        event.preventDefault();
        await axios.post('http://localhost:8000/users/', this.state)
            .then(res => {
                console.log(res)
                if (res.status === 201) {
                    this.setState({ token: res.data.token })
                    this.notify()
                    setTimeout(function () { clickSwitch() }, 3000);
                }
                if (res.status !== 201) {
                    this.notifyError()
                }
                this.resetState()
            })
    }
    notify = () => toast.success("Succes created an user please login now", {
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
            <div class="form-wrapper">
                <button type="button" class="switcher switcher-signup">
                    Sign Up
                    <span class="underline"></span>
                </button>
                <form class="form form-signup">
                    <fieldset>
                        <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                        <div class="input-block">
                            <label for="signup-email">User Name</label>
                            <input id="signup-username" type="username" value={this.state.username} onChange={this.handleUsername} required />
                        </div>
                        <div class="input-block">
                            <label for="signup-email">E-mail</label>
                            <input id="signup-email" type="email" required />
                        </div>
                        <div class="input-block">
                            <label for="signup-password">Password</label>
                            <input id="signup-password" type="password" value={this.state.password} onChange={this.handlePassword} required />
                        </div>
                        <div class="input-block">
                            <label for="signup-password-confirm">Confirm password</label>
                            <input id="signup-password-confirm" type="password" value={this.state.confirmPassword} onChange={this.handlePasswordConfirm} required />
                        </div>
                    </fieldset>
                    <button type="submit" onClick={this.submitUserSignUp} class="btn-signup">Continue</button>
                </form>
            </div>
        )
    }
}

export default SignUp;