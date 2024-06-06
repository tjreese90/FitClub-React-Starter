import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<div className="header">
			<img className="logo" src={Logo} alt="" />
			{menuOpened === false && mobile === true ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: "0.5rem",
						borderRadius: "5px",
					}}
					onClick={() => setMenuOpened(true)}
				>
					<img
						src={Bars}
						alt=""
						style={{ width: "1.5rem", height: "1.5rem" }}
					/>
				</div>
			) : (
				<ul className="header-menu">
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="home"
							smooth={true}
                            spy={true}
                            activeclass='active'
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="programs"
                            spy='true'
							smooth={true}
						>
							Programs
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="reasons"
                            spy='true'
							smooth={true}
						>
							Why Us
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="plans"
                            spy='true'
							smooth={true}
						>
							Plans
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="testimonials"
                            spy='true'
							smooth={true}
						>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
