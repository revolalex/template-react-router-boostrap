import React from "react";
import { Row, Col, Container, Form} from "react-bootstrap"
import axios from 'axios';
import './BlogCards.css'
import MyBlogCards from "./MyBlogCard";


class BlogCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            search: '',
            stack: ''
        }
        this.onFilterSelect = this.onFilterSelect.bind(this)
        this.onSearchInput = this.onSearchInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.getData = this.getData.bind(this)
        this.resetSearchInput = this.resetSearchInput.bind(this)
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        await axios.get('http://localhost:8000/api/blogs/')
            .then(res => {
                console.log(res.data)
                this.setState({ articles: res.data })
            })
    }

    async onFilterSelect(event) {
        this.setState({ stack: event.target.value })
        let data
        await axios.get('http://localhost:8000/api/blogs/')
            .then(res => {
                data = res.data
                const filterArticles = res.data.filter(el => el.stack === event.target.value)
                this.setState({ articles: filterArticles })
            })
        if (event.target.value === "All") {
            this.getData()
        } else {
            const filterArticles = data.filter(el => el.stack === event.target.value)
            this.setState({ articles: filterArticles })
        }
    }

    async onSearchInput(event) {
        const search = this.state.search
        await axios.get('http://localhost:8000/api/blogs/')
            .then(res => {
                const filterArticles = res.data.filter(el => el.text.includes(search) && el.title.includes(search))
                this.setState({ articles: filterArticles })
            })
        this.resetSearchInput()

    }

    async onKeyUp(event) {
        if (event.charCode === 13) {
            await axios.get('http://localhost:8000/api/blogs/')
                .then(res => {
                    const filterArticles = res.data.filter(el => el.text.includes(this.state.search))
                    this.setState({ articles: filterArticles })
                })
            this.resetSearchInput()

        }
    }

    handleInput(e) {
        if (e.target.value === "") {
            this.getData()
        }
        this.setState({ search: e.target.value })

    }

    resetSearchInput() {
        this.setState({
            search: '',
            stack: 'All'
        })
    }
    
    async onDelete(event) {
        let that = this
        const id = event.target.id
        await axios
            .delete(`http://localhost:8000/api/blogs/${id}/`)
            .then((res) => that.getData())
    }

    render() {

        const { articles } = this.state
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <div className="input-group mb-4">
                                    <input
                                        type="search"
                                        placeholder="What're you searching for?"
                                        aria-describedby="button-addon5"
                                        className="form-control"
                                        value={this.state.search}
                                        onChange={this.handleInput}
                                        onKeyPress={this.onKeyUp}
                                    />
                                    <div className="input-group-append">
                                        <button onClick={this.onSearchInput} id="button-addon5" className="btn my-color-btn"><i className="fa fa-search my-search-icon-button"></i></button>
                                    </div>
                                </div>
                            </Container>

                        </Col>

                        <Col>
                            <div >
                                <Container>
                                    <Form.Select aria-label="Default select example" onChange={this.onFilterSelect} className="" value={this.state.stack}>
                                        <option disabled selected value=""> -- select an filter stack -- </option>
                                        <option value="Front">Front</option>
                                        <option value="Back">Back</option>
                                        <option value="All">All</option>
                                    </Form.Select>
                                </Container>
                            </div>

                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {articles.map((article, index) => (
                            <MyBlogCards index={index} article={article} onDelete={this.onDelete}/>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BlogCards;