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
    'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl';
  return (
    <Link
      className={`${baseClasses} ${
        isDarkMode
          ? 'bg-bg-dark text-primary-dark border border-border-dark'
          : 'bg-bg-light text-primary-light border border-border-light'
      } ${content ? 'min-h-32' : 'min-h-40'} cursor-pointer`}
      to={link}
    >
      <div className="p-6 h-full flex flex-col items-center">
        <div>
          <div className="flex items-center mb-3 text-center">
            <h3
              className={`font-bold text-lg ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              {title}
            </h3>
            <div className="flex items-center space-x-2">{icon}</div>
          </div>
          {content && (
            <p
              className={`text-sm leading-relaxed ${!isDarkMode ? 'text-secondary-dark' : 'text-secondary-light'}`}
            >
              {content}
            </p>
          )}
        </div>
        {!content && (
          <div className="flex items-center justify-center h-full ">
            <div className="text-center">
              <InventoryIcon
                className={`w-12 h-12 mx-auto mb-2 opacity-50 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              />
              <p
                className={`text-sm opacity-70 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
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
