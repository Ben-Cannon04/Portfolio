import { Link, Outlet } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  );
}

export default App;
