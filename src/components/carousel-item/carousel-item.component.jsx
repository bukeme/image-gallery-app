import './carousel-item.styles.css';


const CarouselItemComponent = ({src, alt}) => {
	const handleDragStart = (event) => event.preventDefault();
	return (
		<div className='carousel-item-component' onDragStart={handleDragStart} role="presentation">
			<img src={src} alt={alt} />
		</div>
	);
}

export default CarouselItemComponent;