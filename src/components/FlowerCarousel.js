import React from 'react';
import { useSelector } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import '../flowercarousel.css';
import { Link } from 'react-router-dom'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const FlowerCarousel = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">Featured Bouquets</h2>
      <AutoplaySlider
        className="flower-carousel"
        play
        cancelOnInteraction={false}
        interval={5000}>
        {Object.values(products).map((product) => (
          <div key={product.sys.id} className="carousel-slide">
            <Link to={`/product/${product.sys.id}`}>
              <div className="carousel-content">
                <h2>{product.fields.name}</h2>
                {product.fields.image && (
                  <img src={product.fields.image.fields.file.url} alt={product.fields.name} />
                )}
                <p>Price: {product.fields.price}kr</p>
              </div>
            </Link>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default FlowerCarousel;

