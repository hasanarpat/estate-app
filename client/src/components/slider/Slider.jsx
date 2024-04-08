import { useState } from 'react';
import './slider.scss';

const Slider = ({ images }) => {
  const [imgIndex, setImageIndex] = useState(null);

  const changeSlideDirection = (direction) => {
    if (direction === 'left') {
      if (imgIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imgIndex + 1);
      }
    }
  };

  return (
    <div className='slider'>
      {imgIndex !== null && (
        <div className='fullSlider'>
          <div className='arrow' onClick={() => changeSlideDirection('left')}>
            <img src='/arrow.png' alt='' />
          </div>
          <div className='imgContainer'>
            <img src={images[imgIndex]} alt='' />
          </div>
          <div
            className='arrow right'
            onClick={() => changeSlideDirection('right')}
          >
            <img src='/arrow.png' alt='' />
          </div>
          <div className='close' onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className='bigImage'>
        <img src={images[0]} alt='' onClick={() => setImageIndex(0)} />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
