
import React from 'react'
import './Code.css';
function Code() {
    return (
        <div>
            <div id="demo" class="carousel slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                {/*  <!-- The slideshow --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">

                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>

                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>

                        </div>
                    </div>

                    {/* -------------------- */}
                    <div className="carousel-item ">
                        <div className="row">

                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>

                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>

                        </div>
                    </div>
                    {/* ---------------- */}

                    <div className="carousel-item ">
                        <div className="row">

                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>

                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>

                        </div>
                    </div>

                    {/* ---------------------- */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />
                            </div>
                            <div className="col-6">
                                <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" />

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next" >
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div >
    )
}

export default Code



















