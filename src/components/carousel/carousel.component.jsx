import {useContext} from 'react';
import AliceCarousel from 'react-alice-carousel';
import CarouselItemComponent from '../carousel-item/carousel-item.component';
import 'react-alice-carousel/lib/alice-carousel.css';
import {CarouselContext} from '../../contexts/carousel/carousel.context';
import './carousel.styles.css';



const CarouselComponent = () => {
	const {showCarousel, toggleShowCarousel, activeIndex, carousel} = useContext(CarouselContext);
	const renderSlideInfo = ({item, itemsCount}) => (
		<span className='slide-info'>{item} / {itemsCount}</span>
	);
	const items = carousel.imgs.map(({alt, src}) => (
		<CarouselItemComponent alt={alt} src={src} />
	));
	return (
		<>
			{
				showCarousel ?
				<div className='carousel-component'>
					<div>
						<AliceCarousel
							activeIndex={activeIndex}
							mouseTracking
							items={items}
							autoPlay={true}
							infinite={true}
							autoPlayInterval={5000}
							disableSlideInfo={false}
							renderSlideInfo={renderSlideInfo} />
					</div>
					<span
						className='carousel-component__close-icon'
						onClick={toggleShowCarousel}>
						&times;
					</span>
				</div> :
				null
			}
		</>
	);
}

export default CarouselComponent;