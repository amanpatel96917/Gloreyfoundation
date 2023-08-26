import React from 'react'
import './style.css'
export default function Causole() {
    return (
        <>
            <div>
                <div className="owl-carousel-wrapper">
                    <div className="box-92819">
                        <h1 className="text-white mb-3">
                            Join The Movement To end Child Poverty
                        </h1>
                        <p>
                            <a href="#" className="btn btn-primary py-3 px-4 rounded-0">
                                Donate Now
                            </a>
                        </p>
                    </div>
                    <div className="owl-carousel " style={{backgroundImage:"url(./images/owl.video.play.png)"}}>
                        <div
                            className="ftco-cover-1 overlay"
                            style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                        />
                        <div
                            className="ftco-cover-1 overlay"
                            style={{ backgroundImage: 'url("images/hero_2.jpg")' }}
                        />
                        <div
                            className="ftco-cover-1 overlay"
                            style={{ backgroundImage: 'url("images/hero_3.jpg")' }}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
