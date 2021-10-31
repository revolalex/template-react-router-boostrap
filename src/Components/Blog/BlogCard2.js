import React from "react";
import './BlogCards2.css'
import axios from 'axios';
import { Container } from "react-bootstrap";

class BlogCards2 extends React.Component {
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
        const djangoImage = "data:image/png;base64,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"
        const reactImage = "https://loga-engineering.com/wp-content/uploads/2019/10/React-logo-1.png"
        return (
            <div>

                {articles.map((article, index) => (
                    <Container>
                        <div className="blog-card">
                            <div className="meta">
                                <div className="photo" style={{ backgroundImage: article.stack === 'Back' ? `url(${reactImage})` : `url(${djangoImage})`}}></div>
                                <ul className="details">
                                    <li className="author"><a href="/">John Doe</a></li>
                                    <li className="date">{article.date}</li>
                                    <li className="tags">
                                        <ul>
                                            <li><a href="/">{article.stack}</a></li>
                                            <li><a href="/">{article.stack === 'Front' ? "React" : "Django"}</a></li>
                                            {/* <li><a href="#">HTML</a></li>
                                            <li><a href="#">CSS</a></li> */}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="description">
                                <h1>Learning to Code</h1>
                                <h2>Opening a door to the future</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                                <p className="read-more">
                                    <a href="/">Read More</a>
                                </p>
                            </div>
                        </div>
                    </Container>

                ))}
            </div>
        );
    }
}

export default BlogCards2;