import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navBar'>
      { user.userType === 'Hero' ? 
      <>
      <div className='navLogo'>
        <img className='logoImg' src="../../images/logo.png" alt='logo' />
      </div>
      <h2>Hunger Hero</h2>
        <Link className='navLinks' to="/" >Home</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/hero/posts">Your Posts</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/hero">All Posts</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/requests" >Requests</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/profile">My Account</Link>
        &nbsp;&nbsp;
        {/* <span>Welcome, {user.businessName}</span> */}
        &nbsp;&nbsp;<Link className='navLinks' to="" onClick={handleLogOut}>Log Out</Link>
      </>
      :
      <>
      <div className='navLogo'>
        <img className='logoImg' src="../../images/logo.png" alt='logo' />
      </div>
      <h2>Hunger Hero</h2>
        <Link className='navLinks' to="/" >Home</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/hero">All Posts</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/requests" >Requests</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/profile">My Account</Link>
        &nbsp;&nbsp;
        {/* <span>Welcome, {user.businessName}</span> */}
        &nbsp;&nbsp;<Link className='navLinks' to="" onClick={handleLogOut}>Log Out</Link>
      </>
      }
    </nav>
  );
}