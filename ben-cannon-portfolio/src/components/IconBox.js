import PropTypes from 'prop-types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

IconBox.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  isDarkMode: PropTypes.bool,
};

function IconBox({ icon, link, isDarkMode }) {
  const iconMap = {
    LinkedIn: (
      <LinkedInIcon fontSize="inherit" className="w-12 h-12 mx-auto mb-2" />
    ),
    GitHub: (
      <GitHubIcon fontSize="inherit" className="w-12 h-12 mx-auto mb-2" />
    ),
  };

  const baseClasses =
    'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl';

  switch (icon) {
    case 'LinkedIn':
      return (
        <div
          className={`${baseClasses} bg-gradient-to-br from-blue-500 to-blue-700 text-white cursor-pointer flex items-center justify-center min-h-32`}
          onClick={() => link && window.open(link, '_blank')}
        >
          <div className="text-center">
            {iconMap[icon]}
            <p className="text-sm font-medium opacity-90">{icon}</p>
          </div>
        </div>
      );
    default:
      return (
        <div
          className={`${baseClasses} ${
            isDarkMode
              ? 'bg-bg-dark text-primary-dark border border-border-dark'
              : 'bg-bg-light text-primary-light border border-border-light'
          } cursor-pointer flex items-center justify-center min-h-32`}
          onClick={() => link && window.open(link, '_blank')}
        >
          <div className="text-center">
            {iconMap[icon]}
            <p className="text-sm font-medium opacity-90">{icon}</p>
          </div>
        </div>
      );
  }
}

export default IconBox;
