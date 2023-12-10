import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to={'/'}>
        <img className='nav-img' src='src/assets/home-icon.png' alt='home' />
      </Link>
    </nav>
  );
}

export default Navbar;
