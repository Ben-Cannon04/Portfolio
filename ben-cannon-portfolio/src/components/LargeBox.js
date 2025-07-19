import PropTypes from 'prop-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Skill from './Skill';

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
  grade,
  skills,
  child,
  isDarkMode,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border ${isDarkMode ? 'border-border-dark' : 'border-border-light'}`}
    >
      

      <div
        className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
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
                <Skill key={id} text={skill} />
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
        </div>
        {isExpanded && (
          <div className="border-t border-gray-200 mt-2 p-4 sm:p-6 bg-gray-50 w-full rounded-b-xl sm:rounded-b-2xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Modules
            </h4>
            <div className="space-y-4">{child}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LargeBox;
