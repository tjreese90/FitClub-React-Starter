import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6wqgg16', 'template_5g5kg9i', form.current, {
            publicKey: 'V6MNsgaPZcLPJQn5M',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

	return (
		<div className="Join" id="join-us">
			<div className="left-j">
                <hr />
				<div>
					<span className="stroke-text">Ready TO</span>
					<span>Level UP</span>
				</div>
                <div>
					<span>YOUR BODY</span>
					<span className="stroke-text">WITH US?</span>
				</div>
			</div>
            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter Email To Join Now!" />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
		</div>
	);
};

export default Join;
