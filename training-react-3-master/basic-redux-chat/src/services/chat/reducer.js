import * as types from './constants'

const initialState = {
	user: {},
	message:{},
}

export default function reducer (state = initialState, action) {
	switch(action.type) {
		case types.createUser:
			console.log(action.payload)
			return {
				...state,
				user: action.payload
			}
		break;

		case types.createMessage:
			console.log(action.payload)
			return {
				...state,
				message: action.payload
			}
		break;

		default:
			return state;
	}
}