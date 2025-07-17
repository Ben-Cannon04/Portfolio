import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    var backgroundColour = theme === 'light' ? 'bg-neutral-50' : 'bg-zinc-900';

    document.body.classList.remove(
      'min-h-screen',
      'bg-neutral-50',
      'bg-zinc-900'
    );
    document.body.classList.add(backgroundColour);
    document.body.classList.add('min-h-screen');
  }, [theme]);

  const [isDarkMode, setIsDarkMode] = useState(theme === 'light');

  return (
    <>
      <main
        className={
          'text-center py-2 ' + (isDarkMode ? '' : 'min-h-screen bg-zinc-900')
        }
      >
        <Outlet context={[isDarkMode, setIsDarkMode]} />
      </main>
    </>
  );
}

export default App;
