import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap"
import axios from 'axios';


class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/blogs/')
            .then(res => {
                console.log(res.data)
                this.setState({ articles: res.data })
            })

    }
    render() {

        const { articles } = this.state
        return (
            <div>
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {articles.map((article, index) => (
                            <Col>
                                <Card 
                                bg={article.stack === 'Front' ? "primary": "warning"}
                                border={article.stack === 'Front' ? "warning": "primary"}
                                >
                                <Card.Header>{article.stack}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{article.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{article.sub_title}</Card.Subtitle>
                                        <Card.Text>
                                            {article.text}
                                        </Card.Text>
                                        <Card.Footer className="text-muted">{article.date}</Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blogs;