import React from "react";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Background = require("../images/particles1.jpg");

var sectionStyle = {
	className: "img-fluid",
	backgroundImage: `url(${Background})`,
	backgroundRepeat:'no-repeat',
	backgroundSize:'100% 100%'
};
const Content = ()=> (
	<div>
		<div style={{height:'120px'}}> 
			{/* dummy div */}
		</div>
		<section className="features">
		<div className="container">
			<div className="section-heading text-center" style={{fontFamily:'Courier New'}}>
				<h2><b>What can you do with Evnt manager?</b></h2>
				<h3> It's so simple ! </h3>
				<hr />
			</div>
			<div style={{height:'150px'}}> 
				{/* dummy div */}
			</div>
			<div className="row">
				<div className="col-lg-4 my-auto">
					<div className="screen">
						<img src={require("../images/calendarWithPen.jpg")} className="img-fluid" alt="pen with calendar" />
					</div>
					<div className="button">
					</div>
				</div>
				<div className="col-lg-8 my-auto">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6">
								<div className="feature-item" style={{textAlign:'center'}}>
								<FontAwesome className="mb-3" name="check-square" size="4x"/>
									<h3>Make it</h3>
									<p className="text-muted">Simply prepare your card with images according to event.</p>
								</div>
							</div>
							<div className="col-lg-6" style={{textAlign:'center'}}>
								<div className="feature-item">
								<FontAwesome className="mb-3" name="address-card" size="4x"/>
									<h3>Add it</h3>
									<p className="text-muted"> Add a well-wishing message in an email text. </p>
								</div>
							</div>
						</div>
						<div style={{height:'100px'}}>
							{/* dummy div */}
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="feature-item" style={{textAlign:'center'}}>
									<FontAwesome className="mb-3" name="save" size="4x"/>
									<h3>Save it</h3>
									<p className="text-muted">Save your event messages with your selected images with specific date and time.</p>
								</div>
							</div>
							<div className="col-lg-6" style={{textAlign:'center'}}>
								<div className="feature-item">
								<FontAwesome className="mb-3" name="send" size="4x"/>
									<h3>Send it</h3>
									<p className="text-muted">Saved events will be delivered automatically at scheduled time via E-mail. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{height:'170px'}}> </div>
		</div>
	</section>
	<div>
		<section className="cta" style={sectionStyle}>
			<div className="cta-content">
				<div style={{height:'300px'}}> </div>
				<div className="container">
					<h1 style={{color: 'white', fontSize:'80px', maxWidth:'450px', fontFamily: 'Courier New', opacity:'1.0'}}>Stop <br />forgetting.<br />Start <br /> managing.</h1>
					<MuiThemeProvider>
						<Link to='/Login'>
							<Button variant="contained" color="secondary" size="large">
								Let's get Started
							</Button>
						</Link>
					</MuiThemeProvider>
				</div>
				<div style={{height:'300px'}}> </div>
			</div>
			<div className="overlay" style={{height:'100%'}}/>
		</section>
	</div>

		<section className="contact bg-warning" >
			<div style={{height:'150px'}}> 
				{/* dummy div */}
			</div>
			<div className="container">
				<h2 style={{fontFamily:'Courier New', textAlign:'center'}}>Contact the developer's.
						I <FontAwesome name="heart" size="lg"/>
						{" "} new friends!
				</h2>
				<ul className="list-inline list-social" style={{textAlign:'center'}}>
					<li className="list-inline-item social-twitter">
						<a style={{padding:'25px'}} target="blank" href="https://www.linkedin.com/in/sahil-kumar-4aa514176/">
						<FontAwesome name="linkedin" className="mb-3" size="4x"/>
						</a>
					</li>
					<li className="list-inline-item social-twitter">
						<a style={{padding:'25px'}} target="blank" href="https://twitter.com/Sahil01689678">
						<FontAwesome name="twitter" className="mb-3" size="4x"/>
						</a>
					</li>
					<li className="list-inline-item social-github">
						<a style={{padding:'25px'}} target="blank" href="https://github.com/kumarsgoyal">
						<FontAwesome name="github" className="mb-3" size="4x"/>
						</a>
					</li>
				</ul>
				
			</div> 
			<div style={{height:'150px'}}>
				{/* dummy div */}	 
			</div>
		</section>
	</div>
);
 export default Content; 