import React from 'react'
import "./Nav.css"
import logo from "./logo"
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__burger">
                <MenuIcon fontSize="large"/>
                </div>
                <div className="nav__left">
                    <a href="/">Tour</a>
                    <a href="/">Pricing</a>
                    <a href="/">About us</a>
                </div>
                <div className="nav__center">
                    <svg viewBox="0 0 350 144" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd" stroke="none" stroke-width="1">
                            <path d={logo[0]}></path>
                            <path d={logo[1]}></path>
                            <path d={logo[2]}></path>
                        </g>
                    </svg>
                </div>
                <div className="nav__right">
                    <a href="/">Login</a>
                    <button>Join</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
