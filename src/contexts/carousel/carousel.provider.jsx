import {useState} from 'react';
import {CarouselContext} from './carousel.context';


const CarouselProvider = ({children}) => {
	const [showCarousel, setShowCarousel] = useState(true);
	const toggleShowCarousel = () => {
		setShowCarousel(!showCarousel);
	}
	return (
		<CarouselContext.Provider value={{showCarousel, toggleShowCarousel}}>
			{children}
		</CarouselContext.Provider>
	);
}

export default CarouselProvider;