import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, usersReducer, postReducer, postsReducer, appReducer } from './reducers';

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
});

const composeEnhances = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE || compose;

export const store = createStore(reducer);
