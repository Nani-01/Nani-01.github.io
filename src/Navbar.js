
import { Component } from "react";
import "./NavbarStyles.css";
import Logo from "./Logo";



class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>
                <nav>
                    <a href="index.html">
                        <Logo />
                    </a>
                    <div id="sidebar">
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}
                        >
                            <li>
                                <a onClick={this.handleClick} className="active navlinks" href="#about">About</a>

                            </li>
                            <li> <a onClick={this.handleClick} className="active" href="#work">Work</a></li>
                            <li> <a onClick={this.handleClick} className="active" href="#games">Games</a></li>
                            <li> <a onClick={this.handleClick} className="active" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;