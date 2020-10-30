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
                <video autoPlay muted controls="false" playsinline loop preload="none">
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/4R2sV3FwhEekztPVvutukA/220d4be042fff6bddbae14881bb66d25/Search_1.webm" type="video/webm" />
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/6idgMknqlQ8jVMwfkUMiYA/63dba20ab61cbb9df26c9b2b5dad380b/Search.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="productInfo__slide slide-reverse">
                <video autoPlay muted controls="false" playsinline loop preload="none">
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/2jMsAZbP8wnihWUjmbuJ8Q/034c63bd8df02c3558975fc58d935654/Everyone_on_Board_final.webm" type="video/webm" />
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/7zaEle3uPKPt3Gxq6cVjUU/b23f0dea0e5a36e5bbc26e27a7d33fa8/Everyone_on_Board_final_1.mp4" type="video/mp4" />
                </video>
                <div className="productInfo__slideContent">
                    <h2>Get everyone
                    on board - literally</h2>
                    <p>So long, zip files and email attachments! Partners can view, upload, and download content directly from your workspace.
                    </p>
                </div>
            </div>
            <div className="productInfo__slide">
                <div className="productInfo__slideContent">
                    <h2>Simplify collaboration
                    with partners and stakeholders</h2>
                    <p>We believe your content and creative reviews belong together—not spread across chats, texts, spreadsheets, and emails. With Air, centralize collaboration and never lose feedback again.
                    </p>
                </div>
                <video autoPlay muted controls="false" playsinline loop preload="none">
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/GiixjF13aDQ9EfG7qDWvg/f55435d2fa47a95661331a488eb3a8ba/Collaboration.webm" type="video/webm"/>
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/3vhwUZqaJiwI08DS23IUCg/6ea730cc8898b14c1a6bc9e616cb54f2/Collaboration_final.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="productInfo__slide slide-reverse">
                <video autoPlay muted controls="false" playsinline loop preload="none" >
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/RK3PNsHFyTKg9NmqZzdYs/fcbaed8b193c1d593ded8e0488156ac1/Files.webm" type="video/webm" />
                    <source src="//videos.ctfassets.net/l2ai7bec55u7/4KEHi4Fh0RhJUbgGOnmvwG/e1bb987be1195e69630a59b399bbe1d1/Files_Final.mp4" type="video/mp4" />
                </video>
                <div className="productInfo__slideContent">
                    <h2>A home for
                    every part of your
                    creative project</h2>
                    <p>We understand building your brand takes more than visual work. Air supports non-visual file formats too, from spreadsheets to word docs, so you can keep all your work in the same place.
                    </p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 2651" class="ttcgub-0 fFxCWj"><path d="M730.337 781.152c11.068 62.636 43.921 121.972 92.494 167.075 49.063 45.564 111.657 74.503 176.251 81.493 71.718 7.77 142.108-11.15 203.548-54.717 22.3-15.809 27.56-46.706 11.75-69.008-15.81-22.302-46.71-27.564-69.01-11.754-41.41 29.359-88.3 42.176-135.63 37.055-43.533-4.713-85.992-24.461-119.532-55.617-32.875-30.533-55.029-70.224-62.376-111.772-8.124-45.931 1.838-93.83 28.792-138.52 16.691-27.664 37.495-50.359 61.867-67.443 23.682-16.606 51.418-28.441 82.439-35.164 132.04-28.624 322.68 33.799 523.06 171.23 118.31 81.148 230.61 131.312 333.77 149.107 48.67 8.389 95.24 9.477 138.41 3.216 41.27-5.985 116.01-26.838 150.98-50.654-.99-.571-1.97-1.121-2.96-1.702 0 0-38.11-17.972-84.81-66.132-22.85 10.317-51.79 16.786-77.42 20.5-32.87 4.766-68.99 3.818-107.39-2.803-89.01-15.353-188.12-60.162-294.6-133.189-108.9-74.691-215.18-129.03-315.89-161.506-77.41-24.966-149.12-36.181-214.12-33.565-24.28.978-47.64 3.89-70.005 8.733-43.983 9.527-83.786 26.642-118.32 50.87-35.721 25.057-65.928 57.818-89.787 97.36-39.507 65.502-53.861 137.047-41.511 206.907zM-1284.27 1967.15c11.07 62.63 43.92 121.97 92.5 167.07 49.06 45.56 111.65 74.5 176.25 81.5 71.718 7.76 142.104-11.16 203.542-54.72 22.302-15.81 27.564-46.71 11.754-69.01-15.81-22.3-46.706-27.57-69.009-11.76-41.412 29.36-88.305 42.18-135.627 37.06-43.54-4.71-86-24.46-119.54-55.62-32.87-30.53-55.02-70.22-62.37-111.77-8.13-45.93 1.84-93.83 28.79-138.52 16.69-27.66 37.5-50.36 61.87-67.44 23.68-16.61 51.42-28.44 82.44-35.17 132.036-28.62 322.681 33.8 523.06 171.23 118.31 81.15 230.608 131.31 333.768 149.11 48.666 8.39 95.238 9.48 138.41 3.22 41.264-5.99 116.005-26.84 150.976-50.66-.984-.57-1.967-1.12-2.961-1.7 0 0-38.104-17.97-84.809-66.13-22.843 10.31-51.786 16.78-77.418 20.5-32.865 4.76-68.992 3.82-107.389-2.8-89.01-15.36-188.122-60.17-294.596-133.19-108.902-74.69-215.183-129.03-315.891-161.51-77.417-24.97-149.126-36.18-214.123-33.56-24.281.97-47.647 3.88-70.007 8.73-43.98 9.52-83.78 26.64-118.32 50.87-35.72 25.06-65.93 57.82-89.79 97.36-39.5 65.5-53.86 137.05-41.51 206.91zM53.038 1891.93c139.14 153.09 434.171 154.12 554.082 123.15 55.687-14.38 107.808-34.53 154.926-59.91 48.528-26.13 89.123-56.42 120.648-90 18.713-19.93 17.722-51.26-2.216-69.97-19.929-18.71-51.255-17.72-69.968 2.22-49.528 52.76-132.689 97.16-228.155 121.81-103.093 26.62-208.963 27.25-298.091 1.75-30.647-8.76-57.782-20.51-81.467-34.1 35.85-54.91 105.851-304.92-99.812-297.15l-.64.03c-103.466 4.17-125.237 94.32-124.803 132.47.631 54.96 27.755 117.17 75.496 169.7zm50.158-217.64c82.45-13.82 51.507 111.02 18.385 158.39-33.1-26.69-96.919-145.22-18.385-158.39zM1735.61 2533.86c27.8-24.54 13.95-70.44-22.8-75.42-279.17-37.78-614.31-40.52-795.634 112.96-100.61 85.17-108.43 180.45-108.43 207.63 0 115.32 87.85 202.29 204.344 202.29 158.31 0 288.22-119.28 375.71-344.94 1.32-3.4 2.62-6.81 3.91-10.23 10.86-28.91-11.3-59.51-42.14-58.06l-.91.04c-17.09.81-32.16 11.64-38.18 27.66-59.55 158.57-154.99 298.69-298.39 298.69-77.134 0-117.494-58.08-117.494-115.44 0-36.53 20.41-92.85 77.7-141.35 91.334-77.31 291.504-153.17 727.834-93.37a43.329 43.329 0 0034.48-10.46z" fill="#F7F7F7" class="ttcgub-0 cvZdJd"></path></svg>
        </div>
    )
}

export default ProductInfo
