import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(theme == 'light')

  return (
    <>
        <NavBar />
        <main className={'text-center py-2 ' + (enabled ? '' : 'bg-zinc-900')}>
          <Outlet context={[enabled, setEnabled]}/>
        </main>
        
    </>
  );
}

export default App;
