import {useContext} from 'react';
import {CarouselContext} from '../../contexts/carousel/carousel.context';
import './image-collection.styles.css';


const getRandomNum = () => {
	return Math.floor(Math.random() * 4) + 3;
}

const ImageCollectionComponent = () => {
	const {toggleShowCarousel, carousel, setActiveIndex} = useContext(CarouselContext);

	return (
		<>
			{
				carousel.isLoading ?
				null :
				<div className='image-collection'>
					<h1 className='image-collection__header'>
						{
							carousel.query ?
							`Search Result for ${carousel.query}` :
							'Images'
						}
					</h1>
					<div className='image-collection__gallery-container'>
						{carousel.imgs.map((image, index) => (
							<div
								key={image.id}
								style={{gridRow: `span ${getRandomNum()}`}}
								className='image-collection__image-container'
								onClick={() => {
									setActiveIndex(index)
									toggleShowCarousel()
								}}>
								<img alt={image.alt} src={image.src} />
								<div className='image-collection__image-container--overlay' />
							</div>
						))}
					</div>
				</div>
			}
		</>
	);
}

export default ImageCollectionComponent;