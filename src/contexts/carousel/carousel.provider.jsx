import {useState, useReducer, useEffect} from 'react';
import {CarouselContext} from './carousel.context';
import carouselReducer, {INITIAL_STATE} from '../../reducers/carousel/carousel.reducer';
import {searchImage} from '../../reducers/carousel/carousel.actions';


const CarouselProvider = ({children}) => {
	const [carousel, dispatch] = useReducer(carouselReducer, INITIAL_STATE);
	const [showCarousel, setShowCarousel] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const toggleShowCarousel = () => {
		setShowCarousel(!showCarousel);
	}
	const fetchImages = async (url, query) => {
		await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'kEMvPPvZHSfrvn8nH5wpEqYehLNs5s36SjnwHbHgLqOGvVLHgXyWuylE',
			}
		})
			.then(response => response.json())
			.then(response => {
				const imgs = response.photos.map(({alt, id, src: {portrait}}) => (
					{alt, id, src:portrait}
				))
				dispatch(searchImage(query, imgs));
			});
	}
	const fetchSearchedImage = (query) => {
		fetchImages(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, query);
	}
	useEffect(() => {
		fetchImages('https://api.pexels.com/v1/curated?per_page=12', '');
	}, [])
	return (
		<CarouselContext.Provider value={{showCarousel, toggleShowCarousel, carousel, activeIndex, setActiveIndex, fetchSearchedImage}}>
			{children}
		</CarouselContext.Provider>
	);
}

export default CarouselProvider;