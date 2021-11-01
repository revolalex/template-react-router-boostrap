import React, { useState } from 'react';
import { Row, Form, Button, Col, InputGroup, Container, Card } from "react-bootstrap"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormAdd.css'



function FormAdd() {

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        stack: "",
        title: "",
        categories: "",
        text: "",
        check: false
    });

    const notify = () => toast.success("The new post was created", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const notifyError = (message) => toast.error(message || "Something went wrong", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const handleSubmit = async (event) => {
        event.stopPropagation();
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            setValidated(true);
        } else {

            await axios.post('http://localhost:8000/api/blogs/', formData)
                .then(res => {
                    if (res.status === 201) {
                        notify()
                    } else {
                        notifyError()

                    }
                })
            setFormData({
                stack: "",
                title: "",
                categories: "",
                text: "",
                check: false
            })
            setValidated(false);
        }
    };

    const handleBackgroundColor = () => {
        console.log(formData.stack)
        if (formData.stack === 'Front') {
            return 'info'
        } else {
            if (formData.stack === 'Back') {
                return 'warning'
            }
        }
        return "light"
    }


    return (
        <div>
            <Card bg={handleBackgroundColor(formData)}>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='p-3 m-3'>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className={formData.stack === '' ? '' : "white-text"}>Stack</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    required
                                    type="text"
                                    placeholder="Choose Stack"
                                    onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                                    value={formData.stack}
                                >
                                    <option disabled selected value=""> -- select an option -- </option>
                                    <option value="Front">Front</option>
                                    <option value="Back">Back</option>
                                </Form.Select>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className={formData.stack === '' ? '' : "white-text"}>Title</Form.Label>
                                <Form.Control
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    value={formData.title}
                                    required
                                    type="text"
                                    placeholder="Title"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please specify a title.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label className={formData.stack === '' ? '' : "white-text"}>Categories</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        onChange={(e) => setFormData({ ...formData, categories: e.target.value })}
                                        value={formData.categories}
                                        type="text"
                                        placeholder="Catégorie"
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
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label className={formData.stack === '' ? '' : "white-text"}>Text</Form.Label>
                                <Form.Control
                                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                    value={formData.text}
                                    as="textarea"
                                    rows="8"
                                    placeholder="Description"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid text.
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Check
                                onClick={(e) => setFormData({ ...formData, check: e.target.checked })}
                                value={formData.check}
                                required
                                label="I have check all field before submit"
                                feedback="You must check all field before submit."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit" className='my-color-btn'>Submit form</Button>
                    </Form>
                </Container>
            </Card>
        </div>
    );

}

export default FormAdd;





