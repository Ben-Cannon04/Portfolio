import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PropTypes from 'prop-types';

DarkModeBox.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

function DarkModeBox({ isDarkMode, setIsDarkMode }) {
  const baseClasses =
    'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl';

  const handleThemeChange = isDarkMode => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <div
      className={`${baseClasses} ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-border-dark'
          : 'bg-gradient-to-br from-yellow-400 to-orange-500 border border-border-light'
      } text-white cursor-pointer flex items-center justify-center min-h-32`}
      onClick={() => handleThemeChange(!isDarkMode)}
    >
      <div>
        {isDarkMode ? (
          <DarkModeIcon className="w-12 h-12 mx-auto mb-2" />
        ) : (
          <LightModeIcon className="w-12 h-12 mx-auto mb-2" />
        )}
        <p className="text-sm font-medium opacity-90">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>
    </div>
  );
}

export default DarkModeBox;
