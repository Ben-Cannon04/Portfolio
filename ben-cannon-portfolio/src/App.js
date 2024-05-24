import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <NavBar />
        <main className="text-center py-2">
          <Outlet/>
        </main>
        
    </>
  );
}

export default App;
