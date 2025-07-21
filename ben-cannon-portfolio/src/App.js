import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

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

  return (
    <>
      <main
        className={`text-center py-2 min-h-screen ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}
      >
        <Outlet context={[isDarkMode, setIsDarkMode]} />
      </main>
    </>
  );
}

export default App;
