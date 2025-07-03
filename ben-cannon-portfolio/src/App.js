import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
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

  const [enabled, setEnabled] = useState(theme === 'light');

  return (
    <>
      <NavBar />
      <main
        className={
          'text-center py-2 ' + (enabled ? '' : 'min-h-screen bg-zinc-900')
        }
      >
        <Outlet context={[enabled, setEnabled]} />
      </main>
    </>
  );
}

export default App;
