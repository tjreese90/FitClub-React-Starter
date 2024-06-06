import React from "react";
import "./Footer.css";
import GH from "../../assets/github.png";
import IG from "../../assets/instagram.png";
import LI from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import "../../App.css"

const Footer = () => {
	return (
		<div className="Footer-Container">
			<hr />
			<div className="footer">
				<div className="social-links">
					<img src={GH} alt="" />
					<img src={IG} alt="" />
					<img src={LI} alt="" />
				</div>

				<div className="logo-f">
					<img src={logo} alt="" />
				</div>
			</div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
		</div>
	);
};

export default Footer;
