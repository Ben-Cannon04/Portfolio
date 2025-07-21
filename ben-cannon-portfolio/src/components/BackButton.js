import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { iconMap } from '../constants/IconMap';

BackButton.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  isDarkMode: PropTypes.bool,
};

function BackButton({
  link = '/Portfolio',
  icon = 'ArrowBackIcon',
  isDarkMode,
}) {
  return (
    <Link
      to={link}
      className={`${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
    >
      {iconMap[icon]}
    </Link>
  );
}

export default BackButton;
