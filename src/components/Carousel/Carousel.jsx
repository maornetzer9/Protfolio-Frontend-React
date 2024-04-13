import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/data/carousel";

function Carousel({ onClick, snapCraftImage = [], snapCraftVideo = [] }) {

    const renderImages = () =>
        snapCraftImage.map((project, index) => (
            <div className="card" key={index}>
                <div className="card-body">
                    <h3>{project.title}</h3>
                </div>
                <img
                    src={project.src}
                    alt={project.description}
                    className="w-100"
                />
            </div>
        ));

    const renderVideos = () =>
        snapCraftVideo.map((project, index) => (
            <div className="card" key={index}>
                <div className="card-body">
                    <h3>{project.title}</h3>
                </div>
                <video
                    key={index}
                    controls
                    muted  
                    // autoPlay
                    height="275"
                    src={project.src}
                    className="w-100"
                />
            </div>
        ));

    return (
        <div>
            <div className="container">
            <h2 
                style={{ 
                    display: snapCraftVideo.length ? 'none' : 'flex',
                    justifyContent:'center',
                }}
                    >
                         SnapCraft by Maor - An Journey Through Moments 
            </h2>
                <Slider {...settings}>
                    {renderImages()}
                    {renderVideos()}
                </Slider>
                <div className="section-button">
                    <button onClick={onClick}>Next Section</button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Carousel;
