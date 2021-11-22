import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Home.css"
import { setAuth } from "../../Store/actions/user";
import { connect } from "react-redux";

class Home extends React.Component {


    render() {
        const authToFalse=()=>{
            this.props.setAuth(false)
        }
        return (
            <div className="backgroundImage">
                <Container style={{ textAlign: "center" }} className="">
                    <h1>Home</h1>
                    <br /> <br /> <br /> <br /> <br /> <br />
                    <h4>Welcome this project is a full stack application , using Django
                        for the back-end et React for the front-end and also,
                        redux, jwt-auth, axios, protected route, authentificatio, full CRUD
                    </h4>
                    <br /> <br /> <br /> <br /> <br /> <br />
                    <h4>Please login first to have the full acces of the application, or create an user</h4>
                    <Button onClick={authToFalse} variant="danger">set auth to false</Button>

                </Container>

            </div>

        );
    }
}

//connect to redux state
const mapStateToProps = (state) => ({
    auth : state.userReducer.auth

});

// connect to action of redux
const mapDispatchToProps = {
setAuth
};

// connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Home);

