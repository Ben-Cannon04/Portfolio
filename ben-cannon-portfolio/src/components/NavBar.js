import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-sky-800 w-full top-0 shadow-md fixed rounded-md">
      <div className="container mx-auto px-4 py-2 text-gray-100">
        <ul className="flex space-x-4 text-xs sm:text-base text-center whitespace-nowrap justify-center">
          <li>
            <Link to="/Portfolio/">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/work">Work</Link>
          </li>
          <li>
            <Link to="/Portfolio/uni">University</Link>
          </li>
          <li>
            <Link to="/Portfolio/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
