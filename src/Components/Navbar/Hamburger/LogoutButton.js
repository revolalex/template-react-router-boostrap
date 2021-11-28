import React from "react";
import { Button } from "react-bootstrap";
import { setAuth, setUsername } from "../../../Store/actions/user";
import { connect } from "react-redux";
import "./HamburgerMenu.css"

class LogoutButton extends React.Component {


    render() {
        const authToFalse = () => {
            this.props.setAuth(false)
            this.props.setUsername('')
        }
        const auth = this.props.auth
        return (
            <div>
                {auth ? <Button className="logout-button" onClick={authToFalse} variant="danger">Disconnect</Button> : <div></div>}
            </div>
        );
    }
}

//connect to redux state
const mapStateToProps = (state) => ({
    auth: state.userReducer.auth

});

// connect to action of redux
const mapDispatchToProps = {
    setAuth,
    setUsername
};

// connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

