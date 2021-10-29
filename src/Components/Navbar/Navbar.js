import {Navbar, Container, Nav}from "react-bootstrap"
import React from "react";

class NavbarMenu extends React.Component {
    render() {
        const pathname = window.location.pathname
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav activeKey={pathname}  className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/contact">Features</Nav.Link>
                            <Nav.Link href="/about">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarMenu;