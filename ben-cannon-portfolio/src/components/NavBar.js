import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-slate-800 w-full top-0 shadow-md fixed">
            <div className="container mx-auto px-4 py-2 text-gray-100">
                <ul className="flex space-x-4">
                <li><Link to="/Portfolio/">Home</Link></li>
                <li><Link to="/Portfolio/work">Work</Link></li>
                <li><Link to="/Portfolio/uni">University</Link></li>
                <li><Link to="/Portfolio/extracurricular">Extracurricular</Link></li>
                <li><Link to="/Portfolio/creation">Portfolio Creation</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;
