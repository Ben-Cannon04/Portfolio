import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import PropTypes from 'prop-types';

NavBar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
function NavBar({ isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleNav}
            className={`p-2 rounded-md transition-colors ${isDarkMode ? ' hover:bg-gray-700 ' : 'hover:bg-gray-200 '}`}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <CloseIcon
                className={`h-6 w-6 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              />
            ) : (
              <MenuIcon
                className={`h-6 w-6 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              />
            )}
          </button>
          <div className="w-10" />
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={closeNav}
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 h-full w-64 ${isDarkMode ? 'bg-accent-dark' : 'bg-accent-light'} shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2
              className={`text-xl font-bold ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Menu
            </h2>
            <button
              onClick={closeNav}
              className={`p-1 rounded-md hover:bg-opacity-80 transition-colors`}
            >
              <CloseIcon
                className={`h-5 w-5 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              />
            </button>
          </div>

          <ul className="space-y-2">
            <li>
              <Link
                to="/Portfolio"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`}
                onClick={closeNav}
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/work"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`}
                onClick={closeNav}
              >
                <WorkIcon className="h-5 w-5" />
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/education"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`}
                onClick={closeNav}
              >
                <SchoolIcon className="h-5 w-5" />
                <span>Education</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/projects"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`}
                onClick={closeNav}
              >
                <TerminalIcon className="h-5 w-5" />
                <span>Projects</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center px-3 ">
          <button
            className={`space-x-3 px-3 rounded-md py-2 ${isDarkMode ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`}
            onClick={() =>
              window.open('https://www.linkedin.com/in/ben-cannon04', '_blank')
            }
          >
            <LinkedInIcon className="h-5 w-5" />
          </button>

          <button
            className={`space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`}
            onClick={() =>
              window.open('https://github.com/Ben-Cannon04', '_blank')
            }
          >
            <GitHubIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
