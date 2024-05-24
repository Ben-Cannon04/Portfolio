import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/Portfolio/home">Home</Link></li>
                <li><Link to="/Portfolio/work">Work</Link></li>
                <li><Link to="/Portfolio/uni">University</Link></li>
                <li><Link to="/Portfolio/extracurricular">Extracurricular</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
