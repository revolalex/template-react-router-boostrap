import React from "react";
import "./FullScreenMenu.css"
import { Nav } from "react-bootstrap"

class FullScreenMenu extends React.Component {
    menuIsActive(url){
        if(window.location.pathname===url){
            return 'activeMenu'
        }
        return ''
    }
    render() {
        return (
            <div>
                <nav role="navigation">
                    <div className="menuToggle">
                        <input type="checkbox" />
                        <div className="hamburger">
                            <span></span>
                            <span className="middle"></span>
                            <span></span>
                            <span className="x-line"></span>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Nav.Link className={this.menuIsActive('/')} href={"/"}>Home</Nav.Link></li>
                                <li><Nav.Link className={this.menuIsActive('/contact')} href={"/contact"}>Contact</Nav.Link></li>
                                <li><Nav.Link className={this.menuIsActive('/about')} href={"/about"}>About</Nav.Link></li>
                                <li><Nav.Link className={this.menuIsActive('/blog')} href={"/blog"}>Blog</Nav.Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default FullScreenMenu;