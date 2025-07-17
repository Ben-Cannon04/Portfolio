import PropTypes from 'prop-types';

ComboBox.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isDarkMode: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
};

function ComboBox({ title, options, isDarkMode, onChange, value }) {
  return (
    <div className="w-full">
      <label
        className={`block mb-2 font-medium ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
      >
        {title}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-md border shadow-sm focus:outline-none
          ${
            isDarkMode
              ? 'bg-bg-dark text-primary-dark'
              : 'bg-bg-light text-primary-light'
          }`}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ComboBox;
