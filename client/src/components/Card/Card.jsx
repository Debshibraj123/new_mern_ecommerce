// Card.js
import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='container_card'>
      <div className='card'>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg" alt="" className='imgs' />
        <div className='overlay'>
          <button className='shop-now-button'>Shop Now</button>
        </div>
      </div>
      <div className='card'>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg" alt="" className='imgs' />
        <div className='overlay'>
          <button className='shop-now-button'>Shop Now</button>
        </div>
      </div>
      <div className='card'>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg" alt="" className='imgs' />
        <div className='overlay'>
          <button className='shop-now-button'>Shop Now</button>
        </div>
      </div>

      
    </div>
  );
};

export default Card;
