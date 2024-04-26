import NavComponent from './components/nav/nav.component';
import ImageCollectionComponent from './components/image-collection/image-collection.component';
import CarouselProvider from './contexts/carousel/carousel.provider';

import './App.css';

function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <NavComponent />
        <ImageCollectionComponent />
      </CarouselProvider>
    </div>
  );
}

export default App;
