import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import HamburgerMenu from './Components/Navbar/Hamburger/HamburgerMenu';
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog'
import Edit from './Pages/Edit/Edit'
import Login from './Pages/Login/Login'
import { ToastContainer } from 'react-toastify';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Component } from "react";

class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth
        }
    }
    render() {
        const {auth} =this.props.auth
        return (
            <Router>
                <ToastContainer />
                <HamburgerMenu auth={auth}/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/add">
                        {this.props.auth === false || undefined ? (
                            <Redirect to="/login" />
                        ) : (
                            <Add />
                        )}
                    </Route>
                    <Route path="/about">
                        {this.props.auth === false || undefined ? (
                            <Redirect to="/login" />
                        ) : (
                            <About />
                        )}
                    </Route>
                    <Route path="/blog">
                        {this.props.auth === false || undefined ? (
                            <Redirect to="/login" />
                        ) : (
                            <Blog />
                        )}
                    </Route>
                    <Route path="/edit">
                        {this.props.auth === false || undefined ? (
                            <Redirect to="/login" />
                        ) : (
                            <Edit />
                        )}
                    </Route>
                    <Route path="/login" component={Login}>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
const mapStateToProps = (state) => ({
    token: state.userReducer.token,
    auth: state.userReducer.auth
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MyRouter);

