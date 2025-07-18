import PropTypes from 'prop-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

LargeBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  timePeriod: PropTypes.string,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  grade: PropTypes.string,
  skills: PropTypes.array,
  child: PropTypes.node,
  isDarkMode: PropTypes.bool.isRequired,
};

function LargeBox({
  title,
  subtitle,
  timePeriod,
  description,
  icon,
  grade,
  skills,
  child,
  isDarkMode,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`relative mb-8 sm:mb-12 ml-16 sm:ml-20 rounded-xl sm:rounded-2xl border ${isDarkMode ? 'border-border-dark' : 'border-border-light'}`}>
      <div
        className={`absolute -left-12 sm:-left-16 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg`}
      >
        {icon}
      </div>

      <div
        className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        <div
          className={`p-6 ${child ? 'cursor-pointer' : ''}`}
          onClick={() => child && setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <h3
                  className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
                >
                  {title}
                </h3>
                {child && (
                  <div>
                    {isExpanded ? (
                      <ExpandLessIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    ) : (
                      <ExpandMoreIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    )}
                  </div>
                )}
              </div>
              <p className="text-base text-left sm:text-lg text-gray-600 mb-2">
                {subtitle}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {timePeriod}
              </span>
            </div>
          </div>

          <p className="text-gray-700 mb-4 text-sm sm:text-base text-left">
            {description}
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 mb-2 text-left">
              Key Skills:
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, id) => (
                <span
                  key={id}
                  className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Grade:</span>
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

          {isExpanded && child}
        </div>
      </div>
    </div>
  );
}

export default LargeBox;
