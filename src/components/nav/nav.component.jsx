import {useContext} from 'react';
import {CarouselContext} from '../../contexts/carousel/carousel.context';
import './nav.styles.css';



const NavComponent = () => {
	const {fetchSearchedImage} = useContext(CarouselContext);
	const handleSubmit = (event) => {
		event.preventDefault();
		fetchSearchedImage(event.target.elements[0].value);
	}
	return (
		<div className='nav-component'>
			<h1 className='nav-header'>Image Gallery</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Search Images' />
			</form>
		</div>
	);
}

export default NavComponent;