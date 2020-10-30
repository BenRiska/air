import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./TextContent.css"

function TextContent() {
    return (
        <div className="textContent">
            <div className="textContent__container">
                <div className="textContent__content">
                    <h2>Find {" "}
                        <u>creative 
                            <svg xmlns="http://www.w3.org/2000/svg" height="5" fill="none" class="ttcgub-0 ixgvBS"><pattern id="squiggly" x="0" y="0" width="78" height="5" patternUnits="userSpaceOnUse"><path d="M0 1.67188C10.5043 1.67188 10.5043 3.03799 19.8895 3.03799C29.2747 3.03799 29.2747 1.67188 38.6622 1.67188C48.0496 1.67188 48.0496 3.03799 57.4348 3.03799C66.82 3.03799 66.8223 1.67188 78.2075 1.67188" stroke="#33DBDB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="ttcgub-0 cvZdJd"></path></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#squiggly)"></rect></svg>
                        </u> {" "}
                        <u>clarity
                            <svg xmlns="http://www.w3.org/2000/svg" height="5" fill="none" class="ttcgub-0 ixgvBS"><pattern id="squiggly" x="0" y="0" width="78" height="5" patternUnits="userSpaceOnUse"><path d="M0 1.67188C10.5043 1.67188 10.5043 3.03799 19.8895 3.03799C29.2747 3.03799 29.2747 1.67188 38.6622 1.67188C48.0496 1.67188 48.0496 3.03799 57.4348 3.03799C66.82 3.03799 66.8223 1.67188 78.2075 1.67188" stroke="#33DBDB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="ttcgub-0 cvZdJd"></path></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#squiggly)"></rect></svg>
                        </u> {" "}
                        on Air
                    </h2>
                    <p>Give your marketing team a centralized hub for content-driven work, and empower the rest of your organization to take an active role in brand experience.</p>
                    <p>Finally a place to access, share, and play with the images and videos that tell your story.</p>
                    <button>Learn more <ArrowForwardIcon className="learnMoreArrow"/></button>
                </div>
                <img src="https://images.ctfassets.net/l2ai7bec55u7/1qpDHm8UfivThWQxUx1l7A/036121e26dc3835a34e269de6d06fa8d/Group_291.jpg?fm=jpg&fl=progressive&w=656&q=70" alt="content"/>
            </div>
        </div>
    )
}

export default TextContent
