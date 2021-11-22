import React from "react";
import "./HamburgerMenu.css"
import { Nav } from "react-bootstrap"
import { connect } from "react-redux";

class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth,
            links: []
        }         
    }
    componentDidMount() {
        this.setState({ auth: this.props.auth })
        if (this.state.auth) {
            this.setState({
                links: [
                    {
                        text: 'Home',
                        link: '/',
                    },
                    {
                        text: 'Login',
                        link: '/login',
                    },

                    {
                        text: 'About',
                        link: '/about',
                    },
                    {
                        text: 'Add',
                        link: '/add',
                    },
                    {
                        text: 'Edit',
                        link: '/edit',
                    },
                    {
                        text: 'Blog',
                        link: '/blog',
                    },

                ]
            })
        } else {
            this.setState({
                links: [
                    {
                        text: 'Home',
                        link: '/',
                    },
                    {
                        text: 'Login',
                        link: '/login',
                    },
                ]
            })
        }
    }
    
    render() {
        let links = this.state.links.map((link, i) =>
            <li key={i} className="nav-li" ref={i + 1}>
                <Nav.Link href={link.link}>{link.text}</Nav.Link>
            </li>

        );

        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    {links}
                </ul>
            </div>
        )
    }
}

class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            auth: this.props.auth
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        const auth = this.props.auth
        console.log('ICI', auth)
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        };
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={this._menuToggle}></div>
                    <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
                    <div className="title">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <MenuLinks auth={this.props.auth} menuStatus={menuStatus} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.userReducer.auth
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);

