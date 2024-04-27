import classNames from 'classnames/bind'
import styles from './SocialNetworkIcons.module.scss'

const cx = classNames.bind(styles)


function SocialNetworkIcons({ icon, title, href }) {
    const props = {
        title,
        href,
    };
    
    const classes = cx('fab', {
        [icon]: icon
    })

  return (
    <a className="btn btn-icon btn-light" target="_blank" {...props}>
      <i className={classes}></i>
    </a>
  );
}

export default SocialNetworkIcons;
