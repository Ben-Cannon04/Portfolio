import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

LinkBox.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function LinkBox({ text, link }) {
  return (
    <Link
      to={link}
      className="group inline-flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full rounded-br-md border border-blue-200 hover:border-blue-300 text-sm font-medium shadow-inner hover:shadow-md transition-all duration-150 cursor-pointer"
    >
      {text}
    </Link>
  );
}

export default LinkBox;
