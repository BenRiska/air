import React from 'react'
import "./Sponsors.css"
import vector from "./vector.svg"

function Sponsors() {
    return (
        <div className="sponsors">
            {/* <img src={vector} alt=""/> */}

            <div className="sponsors__container">
                <div className="sponsors__sponsor">
                    <img src="https://images.ctfassets.net/l2ai7bec55u7/7drzVcOI0iAWA8ECsYxM1K/2569d64af92a02cf3853bf9206f725ed/Duke_gothic-15.svg?" alt="sponsor"/>
                </div>
                <div className="sponsors__sponsor">
                    <img src="https://images.ctfassets.net/l2ai7bec55u7/1F8X5RenbGEuXUVDqCGvif/3f0933928fb24381f9e4868d220767a7/Curology.svg?" alt="sponsor"/>
                </div>
                <div className="sponsors__sponsor">
                    <img src="https://images.ctfassets.net/l2ai7bec55u7/4tMqPTVa8bKQqndkybpsMC/f2e3797bb4e55500397dbb5eeae2bf05/Clorox.svg?" alt="sponsor"/>
                </div>
                <div className="sponsors__sponsor">
                    <img src="https://images.ctfassets.net/l2ai7bec55u7/43Q7P1lhNWC8NYsUbk2AGk/baa12e03c69ff95ad0f750e34792450c/pattern.svg?" alt="sponsor"/>
                </div>
                <div className="sponsors__sponsor">
                    <img src="https://images.ctfassets.net/l2ai7bec55u7/3cJYq3vaJlVBIZYHMA7bgb/47d93ceb2c39a7330bca83b9fe979942/Thrillist.svg?" alt="sponsor"/>
                </div>
                <div className="sponsors__sponsor">
                    <img src="https://images.ctfassets.net/l2ai7bec55u7/37Y7EUCEB0607g1UmqXF0D/0470c4854c29aab3405a87e923ab4fbf/Y7.svg?" alt="sponsor"/>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
