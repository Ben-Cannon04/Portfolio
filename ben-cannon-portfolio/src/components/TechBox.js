import PropTypes from 'prop-types';
import Skill from './Skill';

TechBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  proficiency: PropTypes.string,
  projects: PropTypes.array,
  children: PropTypes.node,
  hide: PropTypes.bool,
  isDarkMode: PropTypes.bool.isRequired,
};

function TechBox({
  title,
  subtitle,
  proficiency,
  projects,
  children,
  hide = false,
  isDarkMode,
}) {
  if (hide) {
    return null;
  }

  const getProficiencyStyles = proficiency => {
    switch (proficiency) {
      case 'Beginner':
        return 'bg-bg-danger text-text-danger';
      case 'In Progress':
        return 'bg-bg-warning text-text-warning';
      case 'Intermediate':
        return 'bg-bg-info text-text-info';
      case 'Advanced':
        return 'bg-bg-success text-text-success';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div
      className={`relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border ${isDarkMode ? 'border-border-dark' : 'border-border-light'}`}
    >
      <div
        className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        <div className="flex flex-col sm:flex-row items-center sm:justify-between p-4">
          <div className="flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0">
              <h3
                className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              >
                {title}
              </h3>
            </div>
            <p
              className={`text-base text-center sm:text-left sm:text-lg ${isDarkMode ? 'text-secondary-dark' : 'text-gray-600'} mb-2`}
            >
              {subtitle}
            </p>

            <div
              className={`${isDarkMode ? 'text-primary-dark' : 'text-primary-light'} mb-4 text-sm sm:text-base text-center sm:text-left`}
            >
              {children}
            </div>

            {!children && <br />}

            {projects && (
              <div className="mb-4">
                <h4
                  className={`text-sm font-semibold ${isDarkMode ? 'text-primary-dark' : 'text-gray-600'} mb-2 text-center sm:text-left`}
                >
                  Projects used in:
                </h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {projects.map(({ text, to, isClickable }, id) => (
                    <Skill
                      key={id}
                      text={text}
                      to={to}
                      isClickable={isClickable}
                    />
                  ))}
                </div>
              </div>
            )}

            {proficiency && (
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mt-8 sm:mt-2">
                <div className="flex items-center">
                  <span
                    className={`${isDarkMode ? 'text-primary-dark' : 'text-gray-600'} text-sm text-gray-600 mr-2`}
                  >
                    Proficiency:
                  </span>
                  <span
                    className={`font-semibold px-3 py-1 rounded-lg text-sm ${getProficiencyStyles(proficiency)}`}
                  >
                    {proficiency}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechBox;
