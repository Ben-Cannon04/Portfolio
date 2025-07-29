import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useLocalStorage from 'use-local-storage';
import NavBar from './components/NavBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', 'false');

  useEffect(() => {
    document.body.classList.remove(
      'min-h-screen',
      'bg-gradient-to-br',
      'from-gray-900',
      'via-gray-800',
      'to-gray-900',
      'from-blue-50',
      'via-white',
      'to-purple-50'
    );

    if (isDarkMode) {
      document.body.classList.add(
        'min-h-screen',
        'bg-gradient-to-br',
        'from-gray-900',
        'via-gray-800',
        'to-gray-900'
      );
    } else {
      document.body.classList.add(
        'min-h-screen',
        'bg-gradient-to-br',
        'from-blue-50',
        'via-white',
        'to-purple-50'
      );
    }
  }, [isDarkMode]);

  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    let attempts = 0;
    const maxAttempts = 2;

    const tryScroll = () => {
      const element = document.getElementById(lastHash.current);
      if (lastHash.current && element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }, 100);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100); // retry in 100ms
      }
    };
    tryScroll();
  }, [location]);

  return (
    <>
      <main
        className={`text-center py-2 min-h-screen ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}
      >
        <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Outlet context={[isDarkMode, setIsDarkMode]} />
      </main>
    </>
  );
}

export default App;
