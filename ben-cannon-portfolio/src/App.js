import { Link, Outlet } from "react-router-dom";
import WorkPage from "./WorkPage";
import NavBar from "./NavBar";

function App() {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  );
}

export default App;
