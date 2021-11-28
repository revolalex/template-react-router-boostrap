import React from "react";
import "./HamburgerMenu.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton";
import MenuUsername from "./MenuUsername";


class MenuLinks extends React.Component {


    render() {
        const links = this.props.links.map((link, i) =>
            <li key={i} className="nav-li" ref={i + 1}>
                <Link to={link.link}>{link.text}</Link>
            </li>
        );

        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    {links}
                </ul>
                <LogoutButton />
            </div>
        )
    }
}

class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            links: [],
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
        this.setState({ auth: this.props.auth })
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
        const links = this.props.auth ? [
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

        ] : [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Login',
                link: '/login',
            },
        ]

        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={this._menuToggle}></div>
                    {this.props.username !== ''
                        ? <MenuUsername />
                        : null
                    }

                    <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
                    <div className="title">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <MenuLinks menuStatus={menuStatus} links={links} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.userReducer.auth,
    username: state.userReducer.username
});

// connect to action of redux
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);

