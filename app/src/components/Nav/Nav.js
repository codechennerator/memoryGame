import React from "react";

const Nav = () =>
    <div className = "contianer-fluid">
        <nav className = "navbar navbar-inverse navbar-top">
            <div className = "container">
                <button type = "button" className = "collapsed navbar-toggle">
                    <span className = "sr-only">Toggle navigation</span>
                    <span className = "icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a href = "/" className = "navbar-brand">
                    Memory Game
                </a>
            </div>
        </nav>
    </div>
export default Nav;