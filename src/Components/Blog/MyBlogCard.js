import React from "react";
import { Col, Card, Accordion, Button, Modal } from "react-bootstrap"
import './MyBlogCard.css'


class MyBlogCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            
        }
    }


    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    render() {

        return (
            <div>
                <Col key={this.props.index}>
                    <Card bg={this.props.article.stack === 'Front' ? "info" : "warning"}>
                        <Card.Header >
                            {this.props.article.stack}
                            <span className="my-trash" onClick={this.handleShow}>
                                <i className="fas fa-edit my-edit-icon"></i>
                            </span>
                            <span className="my-trash" onClick={this.handleShow}>
                                <i className="fas fa-trash-alt"></i>
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.article.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.article.categories}</Card.Subtitle>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item>
                                    <Accordion.Header>{this.props.article.title}</Accordion.Header>
                                    <Accordion.Body style={{ color: "black" }}>
                                        {this.props.article.text}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Footer className="text-muted">{this.props.article.date}</Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>

                <div>
                    <Modal show={this.state.show} onHide={this.handleClose} style={{ color: "black" }} >
                        <Card border={this.props.article.stack === 'Front' ? "info" : "warning"}>
                            <Modal.Header closeButton>
                                <Modal.Title>Are you sure you wan't to delete <b>'{this.props.article.title}'</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Stack:
                                <b>'{this.props.article.stack}'</b>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="danger" id={this.props.article.id} onClick={this.props.onDelete}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Card>
                    </Modal>
                </div>

            </div>
        )
    }
}

export default MyBlogCards;











