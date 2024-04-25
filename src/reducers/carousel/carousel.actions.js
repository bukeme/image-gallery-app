import {carouselActionTypes} from './carousel.types.js';

export const searchImage = query => ({
	type: carouselActionTypes.SEARCH_IMAGE,
	payload: query
});