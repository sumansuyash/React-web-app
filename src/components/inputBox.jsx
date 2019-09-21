import React, { Component } from "react";

class InputBox extends Component {
	state = {
		credentialID: 'RamanRGuntaka',
		repository: "www.github.com/u123456/DevTest"
	};
	
	render() {	
		return (
			<div>
				<div>{this.state.credentialID}</div>
				<div>{this.state.repository}</div>
				<div>{this.buildURL()}</div>
				<h1>Hello!!!!</h1>
				<button>Submit</button>
			</div>
		);
	}
	
	buildURL() {
		return this.state.credentialID +":"+ this.state.repository;
	
	}
}

export default InputBox;