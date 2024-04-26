import {carouselActionTypes} from './carousel.types.js';

export const INITIAL_STATE = {
	isLoading: true,
	query: '',
	imgs: null
}


const carouselReducer = (state, action) => {
	switch (action.type) {
		case carouselActionTypes.SEARCH_IMAGE:
			return {
				isLoading: false,
				query: action.payload.query,
				imgs: action.payload.imgs,
			}
		default:
			return state;
	}
}

export default carouselReducer;