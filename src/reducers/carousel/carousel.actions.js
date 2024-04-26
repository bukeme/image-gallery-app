import {carouselActionTypes} from './carousel.types';

export const searchImage = (query, imgs) => ({
	type: carouselActionTypes.SEARCH_IMAGE,
	payload: {
		query: query,
		imgs: imgs
	}
});