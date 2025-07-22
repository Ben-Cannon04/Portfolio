import PropTypes from 'prop-types';
import { iconMap } from '../constants/IconMap';
import { useNavigate } from 'react-router-dom';

BackButton.propTypes = {
  icon: PropTypes.string,
  isDarkMode: PropTypes.bool,
};

function BackButton({ icon = 'ArrowBackIcon', isDarkMode }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
      onClick={() => {
        navigate(-1);
      }}
    >
      {iconMap[icon]}
    </button>
  );
}

export default BackButton;
