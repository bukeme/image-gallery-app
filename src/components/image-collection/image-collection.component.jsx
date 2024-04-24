import './image-collection.styles.css';


const getRandomNum = () => {
	return Math.floor(Math.random() * 4) + 3;
}

const ImageCollectionComponent = () => {
	const elements = [
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_adventure_09-276x184.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_food_13-378x567.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_14-276x226.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_kids_01-276x184.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_portrait_12-276x414.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_food_18-276x184.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_adventure_27-276x413.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_wedding_11-276x414.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_19-276x155.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_kids_15-276x184.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_wedding_17-276x184.jpg',
			spanHeight: getRandomNum()
		},
		{
			imgSrc: 'https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_portrait_16-276x184.jpg',
			spanHeight: getRandomNum()
		}
	]

	return (
		<div className='image-collection'>
			<h1 className='image-collection__header'>Gallery</h1>
			<div className='image-collection__gallery-container'>
				{elements.map(({imgSrc, spanHeight}) => (
					<div style={{gridRow: `span ${spanHeight}`}} className='image-collection__image-container'>
						<img alt='Gallery Item' src={imgSrc} />
						<div className='image-collection__image-container--overlay' />
					</div>
				))}
			</div>
		</div>
	);
}

export default ImageCollectionComponent;