import '../components-styles/banner.css'; 
import banner from '../../public/banner.png'

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" className="banner-image"/> 
    </div>
  );
};

export default Banner;