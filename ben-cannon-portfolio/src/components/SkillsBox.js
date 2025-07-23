import PropTypes from 'prop-types';
import Skill from './Skill';

SkillsBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  isDarkMode: PropTypes.bool.isRequired,
};

function SkillsBox({ title, content, skills, isDarkMode }) {
  return (
    <div
      className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} text-pretty border border-border-light rounded-xl sm:rounded-2xl m-3 p-4 text-left`}
    >
      <h2
        className={`text-sm sm:text-base font-bold font-mono pt-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
      >
        {title}
      </h2>

      <p
        className={`lg:text-sm text-xs font-mono pb-1 ${isDarkMode ? 'text-secondary-dark' : 'text-primary-light'}`}
      >
        {content}
      </p>

      <div className="flex flex-wrap gap-1 sm:gap-2 ">
        {skills?.map((skill, index) => (
          <Skill key={index} text={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
