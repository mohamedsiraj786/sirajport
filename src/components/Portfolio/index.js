import React, { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from '../Animatedletters'
import "./index.scss";
import profolioData from '../data/portfolio.json'

const Portfolio = () => {
    const [letterClass] = useState('text-animate');
    console.log(profolioData);
    
    const renderPortfolio = (Portfolio) => {

        return (

            <div className = "images-container">
            {
               Portfolio.map((port, idx) => {

                return (

                    <div className="image-box" key={idx}>

                        <img src= {port.cover} 
                        
                        className = "portfolio-image" 
                        alt="portfolio" />
                        <div className="content">

                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button className="btn" onClick={() => window.open(port.url)}>View</button>
                        </div>
                        </div>
                )

                })

            }
            </div>

           
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {<div>{renderPortfolio(profolioData.portfolio)}</div> }
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;