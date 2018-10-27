import React from "react";
import "./Nav.css";

const NavBar = props => (
    <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Clicky Game</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Score: {props.children}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Top Score: {props.children}</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    Start Clicking to Play!
                </span>
            </div>
        </nav>
    </div>
);

export default NavBar;
