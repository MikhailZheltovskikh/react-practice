import { ACTION__TYPE } from "../action";

const initialAppState = {
	wasLogout: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION__TYPE.LOGOUT:
			return{
				...state,
				wasLogout: !state.wasLogout,
			}
		default:
			return state;
	}
};
