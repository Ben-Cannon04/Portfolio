import { Link } from "react-router-dom";
import PropTypes from "prop-types";

DescriptionBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

function DescriptionBox({ title, content, link }) {
  return (
    <div className="text-pretty">
      <h2 className="lg:text-3xl text-xl font-bold font-mono pt-4">{title}</h2>
      <p className="lg:text-sm text-xs font-mono pb-1">
        {content}{' '}
        {link && (
          <i>
            <Link to={link}>Read more...</Link>
          </i>
        )}
      </p>
    </div>
  );
}

export default DescriptionBox;
