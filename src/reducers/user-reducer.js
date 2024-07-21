import { ACTION__TYPE } from '../action';
import { ROLE } from '../constants';

const initialUserState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION__TYPE.SET_USER:
			return {
				...state,
				...action.payload,
			};

		case ACTION__TYPE.LOGOUT:
			return initialUserState;
		default:
			return state;
	}
};
