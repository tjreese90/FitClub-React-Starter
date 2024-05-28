import React from "react";
import "./Hero.css";
import "../../App.css";
import Header from "../Header/Header";

const Hero = () => {
	return (
		<div className="hero">
			<div className="left-h">
				<Header />
				{/*The best Ad*/}
				<div className="the-best-ad">
					<div> </div>
					<span>the best fitness club in the town</span>
				</div>
				{/*Hero Heading*/}
				<div className="hero-text">
					<div>
						<span className="stroke-text">Shape</span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal body</span>
					</div>
					<div>
						<span>
							In here we will help you to shape and build your ideal body and
							live up your life to the fullest
						</span>
					</div>
				</div>
				{/*Figures*/}
				<div className="figures">
					<div>
						<span>+140</span>
						<span>expert coaches </span>
					</div>
					<div>
						<span>+978</span>
						<span>members joined</span>
					</div>
					<div>
						<span>+50</span>
						<span>fitness programs</span>
					</div>
				</div>

				{/*Hero Buttons*/}
				<div className="hero-buttons">
					<buttons className='btn'>Get Started</buttons>
					<buttons className='btn'>Learn More</buttons>
				</div>
			</div>

			<div className="right-h">right</div>
		</div>
	);
};

export default Hero;
