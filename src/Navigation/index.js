
import { Link } from "react-scroll";
import './navigation.scss';

function Navigation() {
    return (
       <div className="navigation" >
          <ul className="nav-list">
            <Link to="/" className="nav-item" spy={true} smooth={true} duration={1000}>
              Home
            </Link>
      
            <Link to="notre-histoire" className="nav-item" spy={true} smooth={true} duration={1000}>
              Notre histoire
            </Link>
      
            <Link to="a-la-carte" className="nav-item" spy={true} smooth={true} duration={1000}>
              A la carte
            </Link>
      
          </ul>
    </div>
  );
}

export default Navigation;
