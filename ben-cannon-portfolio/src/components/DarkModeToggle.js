import PropTypes from 'prop-types';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
};

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  const handleThemeChange = isDarkMode => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <button
      onClick={() => handleThemeChange(!isDarkMode)}
      className="relative inline-flex items-center h-8 w-20 rounded-full transition-colors duration-300 border border-gray-300 bg-gray-200"
    >
      <span
        className={`absolute left-1 top-1 w-8 h-6 rounded-full flex items-center justify-center text-white transition-all duration-500 ${
          isDarkMode
            ? 'translate-x-10 bg-gray-900'
            : 'translate-x-0 bg-yellow-400'
        }`}
      >
        {isDarkMode ? (
          <DarkModeIcon className="w-5 h-3 text-white" />
        ) : (
          <LightModeIcon className="w-5 h-3 text-white" />
        )}
      </span>
    </button>
  );
}

export default DarkModeToggle;
