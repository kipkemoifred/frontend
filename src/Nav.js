import './App.css';
import {Link, links, withRouter} from 'react-router-dom';

function Nav() {
    const linkStyle={
        color:'white'
    };
  return (
    <div className="Nav">
<nav>
    <h3>SHOPPING</h3>
    <ul className="nav-links">
        <Link style={linkStyle} to='./about'><li>About</li></Link>
        <Link style={linkStyle} to='./contact'><li>Contact</li></Link>
        <Link style={linkStyle} to='./orders'><li>Orders</li></Link>
        <Link style={linkStyle} to='./login'><li>Login</li></Link>
        <Link style={linkStyle} to='./register'><li>Register</li></Link>
        
    </ul>
</nav>
    </div>
  );
}

export default Nav;