import PropTypes from 'prop-types';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';

DescriptionBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.node,
  isDarkMode: PropTypes.bool.isRequired,
};

function DescriptionBox({ title, content, link, icon, isDarkMode }) {
  const baseClasses =
    'group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105  hover:shadow-lg sm:hover:shadow-2xl block';
  return (
    <Link
      className={`${baseClasses} ${
        isDarkMode
          ? 'bg-bg-dark text-primary-dark border border-border-dark'
          : 'bg-bg-light text-primary-light border border-border-light'
      } ${content ? 'min-h-28 sm:min-h-32' : 'min-h-36 sm:min-h-40'} cursor-pointer`}
      to={link}
    >
      <div className="p-4 sm:p-6 h-full flex flex-col">
        <div className="flex-1">
          <div className="flex flex-col items-center mb-2 sm:mb-3">
            <div className="flex items-center ml-2 flex-shrink-0">{icon}</div>
            <h3
              className={`font-bold text-base sm:text-lg leading-tight text-center ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              {title}
            </h3>
          </div>
          {content && (
            <p
              className={`text-xs sm:text-sm leading-relaxed text-center ${!isDarkMode ? 'text-secondary-dark' : 'text-secondary-light'}`}
            >
              {content}
            </p>
          )}
        </div>
        {!content && (
          <div className="flex items-center justify-center h-full ">
            <div
              className={`flex items-center ml-2 flex-shrink-0 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              <InventoryIcon />
              <p
                className={`text-xs sm:text-sm text-center ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              >
                Empty
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default DescriptionBox;
