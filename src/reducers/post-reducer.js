import { ACTION__TYPE } from '../action';

const initialPostState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	comments: [],
};

export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION__TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

