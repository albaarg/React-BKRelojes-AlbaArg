import './NavBar.css';
import logo from '../../assets/images/logo.svg';

function NavBar () {
      return (
        <nav className="topnav">
            <img alt="logo" className="logo" src={logo} /> 
            <a href="#section1">Sección 1</a>
            <a href="#section2">Sección 2</a>
            <a href="#section3">Sección 3</a>


        </nav>

      );   
}

export default NavBar;