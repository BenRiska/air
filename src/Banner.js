import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner__info">
                    <h2>Collaborate creatively</h2>
                    <p>Bring your team and content together in a space designed for visual work</p>
                    <button>Sign up for free</button>
                </div>
                <img src="https://images.ctfassets.net/l2ai7bec55u7/6kefYPAXnpr7Hk9ejsWiYA/0f9e7a396100f4ecd545ff3b390b7091/AIR_masthead_3_2x.jpg?fm=jpg&fl=progressive&w=900" alt="product depiction"/>
            </div>
        </div>
    )
}

export default Banner
