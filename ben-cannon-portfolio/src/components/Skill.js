import PropTypes from 'prop-types';

Skill.propTypes = {
  text: PropTypes.string.isRequired,
};

function Skill({ text }) {
  return (
    <span
      className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm

                       shadow-sm hover:shadow-md transition hover:scale-105"
    >
      {text}
    </span>
  );
}

export default Skill;
