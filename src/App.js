import NavComponent from './components/nav/nav.component';
import ImageCollectionComponent from './components/image-collection/image-collection.component';
import CarouselComponent from './components/carousel/carousel.component';
import CarouselProvider from './contexts/carousel/carousel.provider';

import './App.css';

function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <NavComponent />
        <ImageCollectionComponent />
        <CarouselComponent />
      </CarouselProvider>
    </div>
  );
}

export default App;
