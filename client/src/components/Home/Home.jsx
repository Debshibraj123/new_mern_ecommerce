// Home.js
import './Home.css';
import ReactCarousel, { AFTER, CENTER, BEFORE } from 'react-carousel-animated';
import 'react-carousel-animated/dist/style.css';

const images = [
  {
    index: 1,
    src: 'https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg',
    text: 'Discover the Latest Trends',
  },
  {
    index: 2,
    src: 'https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg',
    text: 'Shop the Exclusive Collection',
    additionalText: 'New arrivals every week!',
  },
  {
    index: 3,
    src: 'https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg',
    text: 'Explore New Arrivals',
  },
];

const Home = () => {
  return (
    <ReactCarousel
      carouselConfig={{
        transform: {
          rotateY: {
            [BEFORE]: () => 'rotateY(25deg)',
            [CENTER]: () => 'rotateY(0deg)',
            [AFTER]: () => 'rotateY(-25deg)',
          },
        },
      }}
      itemBackgroundStyle={{
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '8px 12px 14px -6px black',
      }}
      containerBackgroundStyle={{
        filter: 'blur(7px)',
        backgroundColor: 'rgba(62, 212, 214, 0.3)',
      }}
      carouselHeight="800px"
    >
      {images.map((image, index) => (
        <div key={index} className={`carousel-item ${index === 1 ? 'middle' : ''}`}>
          <div className="text-container">
            <h2>{image.text}</h2>
            {index === 1 && <p>{image.additionalText}</p>}
            <button className="shop-now-button">Shop Now</button>
          </div>
          <img
            src={image.src}
            alt={`slide ${index + 1}`}
            style={{
              height: '600px',
              borderRadius: '20px',
              boxShadow: '0 7px 20px 2px rgb(150, 170, 180)',
              margin: '1rem',
            }}
          />
        </div>
      ))}
    </ReactCarousel>
  );
};

export default Home;
