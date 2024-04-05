import React from "react";
import Slider from "react-slick";
import "../layout/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings, snapCraft } from "../assets/utilities/Carousel";

function Carousel( { onClick = () => {} } ) {
    
    return (
        <div>
            <div className="container">
            <h2 style={{ textAlign: "center" }}>
                SnapCraft by Maor - An Journey Through Moments
            </h2>
                <Slider {...settings}>
                    {snapCraft.map((project, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card-body">
                                    <h3> {project.title} </h3>
                                    <p> {project.description} </p>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.description}
                                    className="w-100"
                                />
                            </div>
                        );
                    })}
                </Slider>
                <div className="section-button">
                    <button onClick={onClick}> 
                        Next Section
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Carousel;
