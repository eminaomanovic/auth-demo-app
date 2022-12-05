import {useEffect, useState} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {removeSession, getUser} from '../../utilities/Common';
import './header.css';

const Header = () => {

    const user = getUser();
    const [loading, setLoading] = useState(false);

    const handleLogout = () => {
        removeSession();
        window.location.reload();
    };

    const handleLoading = () => {
        setLoading(false);
    }

    useEffect(()=>{
        window.addEventListener("load",handleLoading);
        return () => window.removeEventListener("load",handleLoading);
    },[]);

    return (
        <>
            <div className="topbar-container">
                <div className="social-media-container">
                </div>
                <Nav className="topbar-nav-links">
                    {user !== null ?
                        (
                            <>
                                <Link style={{paddingRight: 0, paddingLeft: 5}} className="white-nav-link nav-link"
                                      onClick={handleLogout} to="/">
                                    Log out
                                </Link>
                            </>
                        ) :
                        (
                            <>
                                <Link className="white-nav-link nav-link" to="/login">
                                    Sign In
                                </Link>
                                <Navbar.Text style={{color: '#9B9B9B'}}>
                                    or
                                </Navbar.Text>
                                <Link style={{paddingRight: 0}} className="white-nav-link nav-link" to="/register">
                                    Sign Up
                                </Link>
                            </>
                        )}
                </Nav>
            </div>

            <div className="navbar-container">
            </div>
        </>
    );
}

export default Header;
