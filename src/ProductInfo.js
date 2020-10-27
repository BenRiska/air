import React from 'react'
import "./ProductInfo.css"

function ProductInfo() {
    return (
        <div className="productInfo">
            <h2>Support from the first draft to the final deliverable</h2>
            <div className="productInfo__slide">
                <div className="productInfo__slideContent">
                    <h2>Always find what
                    you're looking for</h2>
                    <p>Browse your workspace like a search engine. Built-in features, like image recognition and smart tags, enable anyone on your team to jump in and find content.
                    </p>
                </div>
                <video playsinline="" loop="" poster="//images.ctfassets.net/l2ai7bec55u7/5cemNhmejL3Vqn7daohqFI/be7821be6e62f947774e2dac30989699/Search_00000.png" preload="none" ><source src="//videos.ctfassets.net/l2ai7bec55u7/4R2sV3FwhEekztPVvutukA/220d4be042fff6bddbae14881bb66d25/Search_1.webm" type="video/webm" /><source src="//videos.ctfassets.net/l2ai7bec55u7/6idgMknqlQ8jVMwfkUMiYA/63dba20ab61cbb9df26c9b2b5dad380b/Search.mp4" type="video/mp4" /></video>
            </div>
            <div className="productInfo__slide"></div>
            <div className="productInfo__slide"></div>
            <div className="productInfo__slide"></div>
        </div>
    )
}

export default ProductInfo
