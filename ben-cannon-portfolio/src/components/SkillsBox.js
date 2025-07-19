import PropTypes from 'prop-types';
import Skill from './Skill';

SkillsBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
};

function SkillsBox({ title, content, skills }) {
  return (
    <div className="text-pretty border border-border-light rounded-xl sm:rounded-2xl m-3 p-4 text-left bg-bg-light">
      <h2 className="text-sm sm:text-base font-bold font-mono pt-4">{title}</h2>

      <p className="lg:text-sm text-xs font-mono pb-1">{content}</p>

      <div className="flex flex-wrap gap-1 sm:gap-2 ">
        {skills?.map((skill, index) => (
          <Skill key={index} text={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
