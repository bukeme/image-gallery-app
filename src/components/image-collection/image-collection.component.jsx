import {useContext} from 'react';
import {CarouselContext} from '../../contexts/carousel/carousel.context';
import './image-collection.styles.css';


const getRandomNum = () => {
	return Math.floor(Math.random() * 4) + 3;
}

const ImageCollectionComponent = () => {
	const {toggleShowCarousel, carousel} = useContext(CarouselContext);

	return (
		<div className='image-collection'>
			<h1 className='image-collection__header'>Gallery</h1>
			<div className='image-collection__gallery-container'>
				{carousel.imgs.map((imgSrc) => (
					<div
						style={{gridRow: `span ${getRandomNum()}`}}
						className='image-collection__image-container'
						onClick={toggleShowCarousel}>
						<img alt='Gallery Item' src={imgSrc} />
						<div className='image-collection__image-container--overlay' />
					</div>
				))}
			</div>
		</div>
	);
}

export default ImageCollectionComponent;