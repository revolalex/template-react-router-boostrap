import React from "react";
import "./HamburgerMenu.css"
import { Nav } from "react-bootstrap"

class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
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
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
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
                <MenuLinks menuStatus={menuStatus} />
            </div>
        )
    }
}
export default HamburgerMenu
