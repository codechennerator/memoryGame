import React from "react";

const Nav = (props) =>
    <div className = "contianer-fluid">
        <nav className = "navbar navbar-inverse navbar-top" style = {{"marginBottom" : 0}}>
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
           
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a className = "text-white"><strong>Score: {props.currentScore} | Top Score: {props.highScore}</strong></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
export default Nav;