import images from '~/access/images';
import styles from './Slide.module.scss';

function Slide() {
  return (
    <div className="col-md-9 col-xl-7 col-lg-7">
      <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel1_indicator" data-slide-to="0" className="active"></li>
          <li data-target="#carousel1_indicator" data-slide-to="1"></li>
          <li data-target="#carousel1_indicator" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images.banners.slide1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={images.banners.slide2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={images.banners.slide3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slide;
