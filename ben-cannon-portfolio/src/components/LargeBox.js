import PropTypes from 'prop-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';
import Skill from './Skill';
import { Link } from 'react-router-dom';

LargeBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  timePeriod: PropTypes.string,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  grade: PropTypes.string,
  skills: PropTypes.array,
  children: PropTypes.node,
  image: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
  expandedByDefault: PropTypes.bool,
  hide: PropTypes.bool,
  isDarkMode: PropTypes.bool.isRequired,
};

function LargeBox({
  title,
  subtitle,
  timePeriod,
  description,
  grade,
  skills,
  children,
  image,
  link,
  linkTitle = 'Show More',
  expandedByDefault = false,
  hide = false,
  isDarkMode,
}) {
  if (hide) {
    return null;
  }
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);
  return (
    <div
      className={`relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border ${isDarkMode ? 'border-border-dark' : 'border-border-light'}`}
    >
      <div
        className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        <div
          className={`p-6 ${children ? 'cursor-pointer' : ''}`}
          onClick={() => children && setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0">
                <h3
                  className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
                >
                  {title}
                </h3>
                {children && (
                  <div>
                    {isExpanded ? (
                      <ExpandLessIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    ) : (
                      <ExpandMoreIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    )}
                  </div>
                )}
              </div>
              <p
                className={`text-base text-center sm:text-left sm:text-lg ${isDarkMode ? 'text-secondary-dark' : 'text-gray-600'} mb-2`}
              >
                {subtitle}
              </p>
            </div>

            {timePeriod && (
              <div className="text-left sm:text-right">
                <span className="inline-block text-center sm:text-left bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {timePeriod}
                </span>
              </div>
            )}
          </div>

          {image && (
            <div className="flex justify-center sm:justify-start">
              <img
                src={image}
                className="h-48 sm:h-56 object-contain rounded-lg sm:rounded-xl mb-4 "
              />
            </div>
          )}

          <p
            className={`${isDarkMode ? 'text-primary-dark' : 'text-primary-light'} mb-4 text-sm sm:text-base text-center sm:text-left`}
          >
            {description}
          </p>

          {!description && <br />}

          {skills && (
            <div className="mb-4">
              <h4
                className={`text-sm font-semibold ${isDarkMode ? 'text-primary-dark' : 'text-gray-600'} mb-2 text-center sm:text-left`}
              >
                Key Skills:
              </h4>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {skills.map((skill, id) => (
                  <Skill key={id} text={skill} />
                ))}
              </div>
            </div>
          )}

          {grade && (
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mt-8 sm:mt-2">
              <div className="flex items-center">
                <span
                  className={`${isDarkMode ? 'text-primary-dark' : 'text-gray-600'} text-sm text-gray-600 mr-2`}
                >
                  Grade:
                </span>
                <span
                  className={`font-semibold px-3 py-1 rounded-lg text-sm ${
                    grade === 'In Progress'
                      ? 'bg-bg-warning text-text-warning'
                      : 'bg-bg-success text-text-success'
                  }`}
                >
                  {grade}
                </span>
              </div>
            </div>
          )}
        </div>

        {link && (
          <Link to={link}>
            <div className="flex w-full justify-end rounded-xl">
              <div className="flex bg-gray-100 text-gray-700 w-40 justify-center rounded-tl-xl px-3 py-1 text-sm font-medium gap-2">
                {linkTitle}
                <OpenInNewIcon />
              </div>
            </div>
          </Link>
        )}

        {isExpanded && (
          <div
            className={`border-t border-gray-200 mt-2 p-4 sm:p-6 ${isDarkMode ? 'bg-accent-dark' : 'bg-accent-light'} w-full rounded-b-xl sm:rounded-b-2xl`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default LargeBox;
