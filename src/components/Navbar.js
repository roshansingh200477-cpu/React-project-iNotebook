import React, { useEffect } from 'react'
import "./NavBar.css";
import { Link , useLocation, useNavigate} from 'react-router-dom';



const Navbar = () => {
  let navigate = useNavigate();
  
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  
  let location  = useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  }, [location]);

    return(
        <>
  <nav className="navbar navbar-expand-lg navbar-dark navbar-premium fixed-top">
      <div className="container">
        <Link className="navbar-brand brand-glow" to="/">
          iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/"?"active":""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/About"?"active":""}`} to="/About">
                About
              </Link>
            </li>
          </ul>

          {!localStorage.getItem('token')?<form className="d-flex search-wrapper">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search..."
            />
            <Link className="btn btn-dark mx-4" style={{outline:'2px solid green'}} to="/login" role='button'>Login</Link>
            <Link className="btn btn-dark" style={{outline:'2px solid green'}} to="/signup" role='button'>Signup</Link>
          </form>: <button onClick={handleLogout} className='btn btn-dark' style={{outline: '2px solid green'}}>Logout</button>}
        </div>
      </div>
    </nav>
</>
    )
}

export default Navbar