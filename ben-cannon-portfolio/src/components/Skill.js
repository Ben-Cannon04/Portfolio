import PropTypes from 'prop-types';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useNavigate } from 'react-router-dom';

Skill.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};

function Skill({ text, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!to) return;

    navigate(to);
  };

  return (
    <span
      className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm transition flex items-center gap-1 
        bg-blue-50 text-blue-700 hover:scale-105 shadow-sm hover:shadow-md ${
          to
            ? 'cursor-pointer hover:bg-blue-100 active:bg-blue-200'
            : ' cursor-default'
        }`}
      onClick={handleClick}
    >
      {text}
      {to && <KeyboardArrowRightOutlinedIcon className="w-3 h-3 ml-1" />}
    </span>
  );
}

export default Skill;
