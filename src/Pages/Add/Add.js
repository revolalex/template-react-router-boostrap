import React from "react";
import { Card, Container } from "react-bootstrap";
import FormAdd from "../../Components/Add/FormAdd";
import './Add.css'


class Contact extends React.Component {
    render() {
        return (
            <div className="contact-background">
                <h1>Add</h1>
                <Container>
                    <Card bg={"light"}>
                        <FormAdd />
                    </Card>
                </Container>


            </div>

        );
    }
}

export default Contact;