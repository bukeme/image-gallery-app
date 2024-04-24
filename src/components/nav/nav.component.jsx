import './nav.styles.css';



const NavComponent = () => {
	return (
		<div className='nav-component'>
			<h1 className='nav-header'>Image Gallery</h1>
			<form>
				<input type='text' placeholder='Search Images' />
			</form>
		</div>
	);
}

export default NavComponent;