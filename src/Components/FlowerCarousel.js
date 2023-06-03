import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FlowerCarousel = () => {
  const productsToDisplay = useSelector((state) => state.productsToDisplay);

  return (
    <Carousel>
      {productsToDisplay.map((flowerWebshop) => (
        <div key={flowerWebshop.sys.id}>
          {flowerWebshop.fields.image && (
            <img
              src={flowerWebshop.fields.image.fields.file.url}
              alt={flowerWebshop.fields.image.fields.title} />
          )}
          <h3>{flowerWebshop.fields.name}</h3>
          <p>Price: {flowerWebshop.fields.price}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default FlowerCarousel;

