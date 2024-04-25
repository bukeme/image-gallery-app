import {useContext} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {CarouselContext} from '../../contexts/carousel/carousel.context';
import './carousel.styles.css';



const CarouselComponent = () => {
	const {showCarousel, toggleShowCarousel} = useContext(CarouselContext);
	const handleDragStart = (event) => event.preventDefault();
	const items = [
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_adventure_09-276x184.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_food_13-378x567.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_14-276x226.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_kids_01-276x184.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_portrait_12-276x414.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_food_18-276x184.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_adventure_27-276x413.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
		<img className='carousel-item' src='https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_wedding_11-276x414.jpg' alt='carousel item' onDragStart={handleDragStart} role='presentation' />,
	];
	return (
		<>
			{
				showCarousel ?
				<div class='carousel-component'>
					<span
						className='carousel-component__close-icon'
						onClick={toggleShowCarousel}>
						&times;
					</span>
					<AliceCarousel
						mouseTracking
						items={items}
						autoPlay={true}
						autoPlayControls={true}
						infinite={true}
						autoPlayInterval={5000} />
				</div> :
				null
			}
		</>
	);
}

export default CarouselComponent;