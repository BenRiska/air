import React from 'react'
import logo from "./logo"
import "./Footer.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotionIconPath from "./notionLogo";

function Footer() {
    return (
        <div className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="114" fill="none"><path d="M52.928 128.23C62.79 110.464 72.276 96.797 72.9 77.912c.125-4.224-1.622-8.2-4.993-10.81-.998-.745-1.997-1.366-2.496-1.117-4.494 1.863-10.61 15.903-8.488 18.636 2.122 2.733 7.614-3.355 9.112-9.07" stroke="#051042" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="ttcgub-0 cvZdJd"></path><path d="M56.05 79.527s-5.493 3.479-6.991-.373c-1.498-3.851 6.865-15.53 6.865-15.53s6.117-8.448 10.61-3.727c3.37 3.603 2.247 8.2 2.247 8.2" stroke="#051042" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M60.668 59.276s2.496-25.222-1.998-28.825c-6.49-4.97-7.24 18.264-8.862 29.073-.125 1.242-1.124 2.112-2.372 2.236-1.373.125-2.496-.745-2.746-2.112l-5.118-25.47c-1.373-6.46-7.864-6.833-7.864-.372l1.623 24.848c.125 2.485-.125 4.97-.5 7.33l-.623 3.48M25.841 94.436c-3.744 3.976-10.61 12.549-17.6 22.364" stroke="#051042" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.313 95.182c1.498-9.07-7.99-17.146-7.99-17.146l5.868-.745c2.746-.373 4.993-1.988 6.24-4.349.75-1.615-.249-3.479-1.996-3.727l-8.613-.994c-5.118-.621-11.484 2.485-13.73 7.206 0 0-2.372 4.97-1.998 8.448.749 8.573 4.12 17.27 4.12 17.27" stroke="#051042" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" ></path><path d="M46.563 2v12.549M10.987 29.209L2 20.388M82.138 29.209L91 20.388" stroke="#384C9D" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" ></path><path d="M28.213 18.027l-3.245-8.075M66.66 18.773l3.494-7.952" stroke="#FFC200" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" ></path></svg>

            <p className="footer__copyright">Copyright © 2020 Air, Inc. All rights reserved</p>

            <div className="footer__left">
                <div className="footer__media">
                    <svg viewBox="0 0 350 144" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd" stroke="none" stroke-width="1">
                            <path d={logo[0]}></path>
                            <path d={logo[1]}></path>
                            <path d={logo[2]}></path>
                        </g>
                    </svg>
                    <div className="footer__mediaLinks">
                    <div className="footer__mediaLink">
                       <InstagramIcon className="footer__mediaLink-icon"/> <p>Instagram</p>
                    </div>
                    <div className="footer__mediaLink">
                       <TwitterIcon className="footer__mediaLink-icon"/> <p>Twitter</p>
                    </div>
                    <div className="footer__mediaLink">
                        <svg className="footer__mediaLink-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path fill="#fff" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"/><path fill="#000" fill-rule="evenodd" d={NotionIconPath} clip-rule="evenodd"/></svg> 
                        <p>Notion</p>
                    </div>
                    <div className="footer__mediaLink">
                      <GitHubIcon className="footer__mediaLink-icon"/>  <p>Github</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer__right">
                <div className="footer__linksCol">
                    <h3>Compare</h3>
                    <ul>
                        <li>Dropbox Alternative</li>
                        <li>Google Drive Alternative</li>
                        <li>Cloud Storage Alternative</li>
                        <li>Asset Management (DAM)</li>
                        <li>Brand Experience (BX)</li>
                        <li>Local to Cloud</li>
                    </ul>
                </div>
                <div className="footer__linksCol">
                    <h3>Use Cases</h3>
                    <ul>
                        <li>Creative Requests</li>
                        <li>Creative Reviews</li>
                        <li>Social Media Planning</li>
                        <li>Content Strategy</li>
                        <li>Brand Guidelines</li>
                        <li>Content Transfer</li>
                    </ul>
                </div>
                <div className="footer__linksCol">
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Culture</li>
                        <li>Releases</li>
                        <li>FAQ</li>
                        <li>Press</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="footer__linksCol">
                    <h3>Explore</h3>
                    <ul>
                        <li>Pricing</li>
                        <li>Remote</li>
                        <li>Logo Database</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Air for Iphone</li>
                        <li>Air for Android</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
