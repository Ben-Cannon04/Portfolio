import PropTypes from 'prop-types';

GradientBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.node,
  gradientFrom: PropTypes.string,
  gradientTo: PropTypes.string,
  textColour: PropTypes.string,
};

function GradientBox({
  title,
  content,
  link,
  icon,
  gradientFrom = 'blue-600',
  gradientTo = 'purple-700',
  textColour = 'white',
}) {
  const baseClasses =
    'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl';
  return (
    <div
      className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} ${baseClasses} col-span-1 sm:col-span-2 text-${textColour} `}
      onClick={() => link && window.open(link, '_blank')}
    >
      <div className="p-4 sm:p-6 h-full flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2 sm:mb-3">
            <h3 className={`font-bold text-lg text-center`}>{title}</h3>
            <div className="flex items-center space-x-2">
              {icon}
              {link && (
                <a className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </div>
          {content && <p className={`text-xs sm:text-sm leading-relaxed text-center`}>{content}</p>}
        </div>
      </div>
    </div>
  );
}

export default GradientBox;
