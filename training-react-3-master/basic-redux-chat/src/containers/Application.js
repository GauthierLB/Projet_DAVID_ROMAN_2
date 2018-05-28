import React, { Component } from 'react';
import './Application.css';

import { Auth } from "aws-amplify";

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {
	createUser,
	createMessage
} from "../services/chat/actions";

var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');






            	



 class Application  extends Component {

 constructor(props) {
    super(props);
	this.state = {
		email: "",
		name: "",
		familyname: "",
		channel:"",
		message:"",
		 email: "",
      password: "",
	}
}





	



	render() {

		return (









			<div className="App">

			
				<div style={{
						position: "absolute",
						top: 100,
						left: 0,
						right: 0,
						bottom: 0,
					}}>
            {
					
                

                



				this.props.chat.user.name === undefined ?



				<div>
			
			
                

				le prenom :
				<input
					onChange={(e) => { this.setState({name: e.target.value }) }}
				/> 
				<br></br>
				<br></br>
				le nom :
				<input
					onChange={(e) => { this.setState({familyname: e.target.value }) }}
				/>
				<br></br>
				<br></br>
				votre email :
				<input
					onChange={(e) => { this.setState({email: e.target.value }) }}
				/>
				<br></br><br></br>

				<button
					onClick={() => { this.props.createUser(this.state.name, this.state.familyname, this.state.email) }}
				>
					SUBMIT
				</button>

			</div>
		:
			<div>
				Le prenom: { this.props.chat.user.name }
				<br></br>
				Le nom: { this.props.chat.user.familyname }
				<br></br>
				Votre email: { this.props.chat.user.email }
				<br></br>

				message :
				<input
					onChange={(e) => { this.setState({message: e.target.value }) }}
				/>
				<br></br><br></br>

				<button
					onClick={() => { this.props.createMessage(this.state.message, this.state.name) }}
				>
					SUBMIT
				</button>
			</div>
		}
			</div>
			</div>
		);
	}

}


const mapStateToProps = (state) => ({
	chat: state.chat,
});

const mapActionsToProps = (dispatch) => ({
	createUser: bindActionCreators(createUser, dispatch),
	createMessage: bindActionCreators(createMessage, dispatch),
});



export default connect(mapStateToProps, mapActionsToProps)( Application );
