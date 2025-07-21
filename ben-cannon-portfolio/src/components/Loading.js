import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  isDarkMode: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

function Loading({ children, loading, error, isDarkMode }) {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (!showLoading) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, []);

  if (!showLoading) return <></>;
  if (loading)
    return (
      <div
        className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );

  if (error)
    return (
      <div>
        <h1 className={isDarkMode ? 'text-primary-dark' : 'text-primary-light'}>
          Error!
        </h1>
      </div>
    );

  return children;
}

export default Loading;
