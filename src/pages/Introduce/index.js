import clsx from 'clsx';
import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
  return (
    <div className={cx('wrap-content')}>
      <b className='primary'>Our Goal</b> <br />
      make every meal an unforgettable experience by providing a wide range of ready-to-eat food options along with
      thorough cooking instructions.
      <br />
      <br />
      <b className='primary'>Our Mission</b> <br />
      cultivate a community where food enthusiasts can share their culinary passion, learn from each other, and explore
      exotic flavors. We are dedicated to delivering high-quality ingredients, meticulously prepared dishes, and
      easy-to-follow cooking guides so that you can recreate exquisite meals at home.
      <br />
      <br />
      <b className='primary'>Our Dream</b> <br />
      become your indispensable companion in every culinary journey, from choosing a quick lunch on a busy day to
      preparing a cozy dinner for family and friends. With [Your Website Name], every meal is not just about satisfying
      a basic need but an opportunity to connect, share, and create memories.
      <br />
      <br/>
      <b className='primary'>video introducing our website</b> <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZVhgcKr3lMU?si=gYcOjvTexIQSjhCu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Introduce;
