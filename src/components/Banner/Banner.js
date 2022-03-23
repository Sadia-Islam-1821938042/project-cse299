import React from 'react';
import "./Banner.css";

const Banner = () => {
    // https://i.ibb.co/yFx2Kzq/Discover-sajek-valley.jpg
    // https://i.ibb.co/NpDcBF3/shada.jpg
    // https://i.ibb.co/3NCGNf2/163-gallary-7jpg.jpg
    return (
        <div >
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://i.ibb.co/NpDcBF3/shada.jpg" class="d-block w-100" height="566px" alt="..." />
                        <div class="carousel-caption" style={{ backgroundColor: "rgba(0, 0, 0, 0.55)", display: "flex", flexDirection: "row" }}>
                            <img className="p-4" src="https://i.ibb.co/yFx2Kzq/Discover-sajek-valley.jpg" alt="" style={{ height: "160px", width: "240px" }} />
                            <div className='p-4' style={{ textAlign: "left" }}>
                                <h3>Cox's Bazar | 3 days and 3 nights (26.03.2022)</h3>
                                <h5 style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>5 days, 6 nights</li>
                                        <li>Dinner and Breakfast included</li>
                                        <li>Transportation</li>
                                        <li>Tour guide</li>
                                    </ul>
                                </h5>
                                <span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <h5>Cost: <span style={{ fontSize: "34px", color: "deepskyblue" }}>4500/-</span></h5>
                                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <span style={{ marginLeft: "10px", color: "gold" }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            
                                            <i class="fas fa-star-half-alt"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <span style={{ marginLeft: "20px", fontSize: "34px" }}>4.5</span>/5.00
                                        </span>
                                    </h5>
                                </span>
                                <div className='mt-2'>
                                    <button type="button" class="book-now-btn">Book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/NpDcBF3/shada.jpg" class="d-block w-100" height="566px" alt="..." />
                        <div class="carousel-caption" style={{ backgroundColor: "rgba(0, 0, 0, 0.55)", display: "flex", flexDirection: "row" }}>
                            <img className="p-4" src="https://i.ibb.co/yFx2Kzq/Discover-sajek-valley.jpg" alt="" style={{ height: "160px", width: "240px" }} />
                            <div className='p-4' style={{ textAlign: "left" }}>
                                <h3>Cox's Bazar | 3 days and 3 nights (26.03.2022)</h3>
                                <h5 style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>3 days, 3 nights</li>
                                        <li>Dinner and Breakfast included</li>
                                        <li>Transportation</li>
                                        <li>Tour guide</li>
                                    </ul>
                                </h5>
                                <span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <h5>Cost: <span style={{ fontSize: "34px", color: "deepskyblue" }}>4500/-</span></h5>
                                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <span style={{ marginLeft: "10px", color: "gold" }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <span style={{ marginLeft: "20px", fontSize: "34px" }}>4.5</span>/5.00
                                        </span>
                                    </h5>
                                </span>
                                <div className='mt-2'>
                                    <button type="button" class="book-now-btn">Book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/3NCGNf2/163-gallary-7jpg.jpg" class="d-block w-100" alt="..." height="566px" />
                        <div class="carousel-caption" style={{ backgroundColor: "rgba(0, 0, 0, 0.55)", display: "flex", flexDirection: "row" }}>
                            <img className="p-4" src="https://i.ibb.co/yFx2Kzq/Discover-sajek-valley.jpg" alt="" style={{ height: "160px", width: "240px" }} />
                            <div className='p-4' style={{ textAlign: "left" }}>
                                <h3>Cox's Bazar | 3 days and 3 nights (26.03.2022)</h3>
                                <h5 style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>3 days, 3 nights</li>
                                        <li>Dinner and Breakfast included</li>
                                        <li>Transportation</li>
                                        <li>Tour guide</li>
                                    </ul>
                                </h5>
                                <span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <h5>Cost: <span style={{ fontSize: "34px", color: "deepskyblue" }}>4500/-</span></h5>
                                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <span style={{ marginLeft: "10px", color: "gold" }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <span style={{ marginLeft: "20px", fontSize: "34px" }}>4.5</span>/5.00
                                        </span>
                                    </h5>
                                </span>
                                <div className='mt-2'>
                                    <button type="button" class="book-now-btn">Book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;