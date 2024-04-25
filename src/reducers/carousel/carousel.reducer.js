import {carouselActionTypes} from './carousel.types.js';
import {IMAGES} from './carousel.data';

export const INITIAL_STATE = {
	isLoading: true,
	imgs: IMAGES
}


const carouselReducer = ({state, action}) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default carouselReducer;