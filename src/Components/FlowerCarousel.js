import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './flowercarousel.css';

const FlowerCarousel = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators
      autoPlay
      infiniteLoop
      interval={4000}
      className="flower-carousel">
      {Object.values(products).map((product) => (
        <div key={product.id} className="carousel-slide">
          <div className="carousel-content"> {/* Wrapper div for content */}
            {/* Render the content of each product */}
            <h2>{product.fields.name}</h2>
            {product.fields.image && (
              <img src={product.fields.image.fields.file.url} alt={product.fields.name} />
            )}
            <p>Price: {product.fields.price}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default FlowerCarousel;

