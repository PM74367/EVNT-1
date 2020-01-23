import React from "react";

const Background = require("../images/headerbg.jpg");
var sectionStyle = {
backgroundImage: `url(${Background})`,
	opacity:'0.9',
	backgroundRepeat:'no-repeat',
	backgroundSize:'100% 100%'
};
const Header = () => (
	<div className="container-fluid">
		<div className="container-fluid" style={sectionStyle}>
			<div className="container-fluid"style={{height:'800px'}}></div>
		</div>
		<header className="masthead">
		<div style={{height:'200px'}}> </div>
		<div className="container h-100">
				<div className="row h-100">
					<div className="col-lg-7 my-auto">
						<div className="header-content mx-auto">
							<h1 className="mb-5" style={{fontFamily:'Courier New', opacity:'1.0'}}><span 		className="display-3" >Evnt Manager</span> <br /> is a web based App. It helps you manage events easily.</h1>
						</div>
					</div>
					<div className="col-lg-5 my-auto">
						<div className="screen">
							<img src={require('../images/todo-list.jpg')} className="img-fluid" alt="Sticky notes" />
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
	
);

export default Header;