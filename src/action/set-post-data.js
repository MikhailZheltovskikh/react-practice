import { ACTION__TYPE } from './action-type';

export const setPostData = (postData) => ({
	type: ACTION__TYPE.SET_POST_DATA,
	payload: postData,
});
