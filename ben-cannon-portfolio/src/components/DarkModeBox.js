import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import PropTypes from 'prop-types';

DarkModeBox.propTypes = {
  enabled: PropTypes.bool.isRequired,
  setEnabled: PropTypes.func.isRequired,
};

function DarkModeBox({ enabled, setEnabled }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = enabled => {
    setTheme(enabled ? 'light' : 'dark');
    setEnabled(enabled);
  };

  return (
    <div
      className="text-9xl cursor-pointer"
      onClick={() => handleThemeChange(!enabled)}
    >
      {enabled ? (
        <DarkModeIcon fontSize="inherit" />
      ) : (
        <LightModeIcon sx={{ color: 'yellow' }} fontSize="inherit" />
      )}
    </div>
  );
}

export default DarkModeBox;
