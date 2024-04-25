import {useState, useReducer} from 'react';
import {CarouselContext} from './carousel.context';
import carouselReducer, {INITIAL_STATE} from '../../reducers/carousel/carousel.reducer';


const CarouselProvider = ({children}) => {
	const [carousel, dispatch] = useReducer(carouselReducer, INITIAL_STATE);
	const [showCarousel, setShowCarousel] = useState(false);
	const toggleShowCarousel = () => {
		setShowCarousel(!showCarousel);
	}
	return (
		<CarouselContext.Provider value={{showCarousel, toggleShowCarousel, carousel}}>
			{children}
		</CarouselContext.Provider>
	);
}

export default CarouselProvider;