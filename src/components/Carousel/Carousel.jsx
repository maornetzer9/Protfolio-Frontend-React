import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/data/carousel";
import LazyLoadModal from "../Lazy-Load-Modal/LazyLoadModal";

function Carousel({ onClick, snapCraftImage = [], snapCraftVideo = [] }) {

    const renderImages = () =>
        snapCraftImage.map((project, index) => (
            <LazyLoadModal key={index} as="div" className="card">
                <div className="card-body">
                    <h3>{project.title}</h3>
                    <img
                        src={project.src}
                        alt={project.description}
                        className="w-100"
                        loading="lazy" 
                    />
                </div>
            </LazyLoadModal>
        ));

    const renderVideos = () =>
        snapCraftVideo.map((project, index) => (
            <LazyLoadModal key={index} as="div" className="card">
                <div className="card-body">
                    <h3>{project.title}</h3>
                    <video
                        key={index}
                        controls
                        muted  
                        height="275"
                        className="w-100"
                    >
                        <source src={project.src} type="video/mp4" />
                        Sorry, your browser does not support embedded videos.
                    </video>
                </div>
            </LazyLoadModal>
        ));

    return (
        <div>
            <div className="container">
                <h2 style={{
                        display: snapCraftVideo.length ? 'none' : 'flex',
                        justifyContent:'center',
                    }}
                >
                    SnapCraft by Maor - An Journey Through Moments 
                </h2>
                <Slider {...settings}>
                    { renderImages() }
                    { renderVideos() }
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
