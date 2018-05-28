import * as types from "./constants";
import axios from "axios";


export function createUser(name, familyname, email) {
	return (dispatch, state) => {
		axios.post('http://localhost:9000/api/gauthier/user',
			{
				name: name,
				familyname: familyname,
				email: email,
				channel: 1
			})
		.then((result) => {
			dispatch({
				type: types.createUser,
				payload: result.data
			})
		})
	}
};


export function createMessage(message,name) {
	return (dispatch, state) => {
		axios.post('http://localhost:9000/api/gauthier/message',
			{
				message: message,
				name: name
			})
		.then((result) => {
			dispatch({
				type: types.createMessage,
				payload: result.data
			})
		})
	}
};
