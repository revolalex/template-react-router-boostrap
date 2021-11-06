import React, { useState } from "react";
import { Col, Card, Accordion, Button, Modal, Form, Row, Container, InputGroup } from "react-bootstrap"
import './MyBlogCard.css'


function MyBlogCards(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edit, setEdit] = useState(false);
    const handleEdit = () => setEdit(true)
    const handleCloseEdit = () => setEdit(false)

    const { article, index, onDelete, onSubmiEdit } = props


    const handleBackgroundColor = (stack) => {
        if (stack === 'Front') {
            return 'info'
        } else {
            if (stack === 'Back') {
                return 'warning'
            }
        }
        return "light"
    }


    const submitEdit = (e) => {
        e.preventDefault();
        // 5 is the postion on button inside the form (6eme élément)
        const id = e.target[5].id
        const formData = Object.values(e.target).reduce(function (prev, cur) {
            prev[cur.name] = cur.value
            return prev
        }, {})
        const modifyArticleToPut = {
            stack: formData.stack,
            title: formData.title,
            categories: formData.categories,
            text: formData.text
        }
        onSubmiEdit(modifyArticleToPut, id)
    }

    return (
        <div>
            <Container>
                {/* Card Blog */}
                <Col key={index}>
                    <Card bg={article.stack === 'Front' ? "info" : "warning"} className='my-article-cards'>
                        <Card.Header >
                            {article.stack}
                            <span className="my-trash" onClick={handleEdit}>
                                <i className="fas fa-edit my-edit-icon"></i>
                            </span>
                            <span className="my-trash" onClick={handleShow}>
                                <i className="fas fa-trash-alt my-trash-icon"></i>
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{article.categories}</Card.Subtitle>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item>
                                    <Accordion.Header>{article.title}</Accordion.Header>
                                    <Accordion.Body style={{ color: "black" }}>
                                        {article.text}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Footer className="text-muted">{article.date}</Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Delete confirmation modal */}
                <Modal show={show} onHide={handleClose} style={{ color: "black" }} >
                    <Card border={article.stack === 'Front' ? "info" : "warning"}>
                        <Modal.Header id="toto" closeButton>
                            <Modal.Title>Are you sure you wan't to delete <b>'{article.title}'</b></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Stack:
                            <b>'{article.stack}'</b>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='my-color-btn' onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" id={article.id} onClick={onDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Card>
                </Modal>


                {/* TODO Edit Modale */}
                <Modal show={edit} onHide={handleCloseEdit} style={{ color: "black" }} size="lg" centered>
                    <Card bg={handleBackgroundColor(article.stack)}>
                        <Container>
                            <Form onSubmit={submitEdit} className='p-3 m-3'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4">
                                        <Form.Label >Stack</Form.Label>
                                        <Form.Select
                                            name="stack"
                                            aria-label="Default select example"
                                            required
                                            type="text"
                                            value={article.stack}
                                        >
                                            <option disabled selected value=""> -- select an option -- </option>
                                            <option value="Front">Front</option>
                                            <option value="Back">Back</option>
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            name="title"
                                            placeholder={article.title}
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please specify a title.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4">
                                        <Form.Label >Categories</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="categories"
                                                placeholder={article.categories}
                                                type="text"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please specify a categories.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label >Text</Form.Label>
                                        <Form.Control
                                            name="text"
                                            placeholder={article.text}
                                            as="textarea"
                                            rows="8"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid text.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Form.Group as={Col} md="4" className="mb-3" >
                                    <Form.Check
                                        name="check"
                                        required
                                        label="I'm sure i wan't to edit this article"
                                    />
                                </Form.Group>
                                <Button type="submit" id={article.id} variant="success"  >Edit</Button>
                                &nbsp;  &nbsp;  &nbsp;
                                <Button id="close-modal-edit" className='my-color-btn' onClick={handleCloseEdit}>
                                    Close
                                </Button>
                            </Form>
                        </Container>
                    </Card>
                </Modal>
            </Container>
        </div>
    )
}


export default MyBlogCards;


