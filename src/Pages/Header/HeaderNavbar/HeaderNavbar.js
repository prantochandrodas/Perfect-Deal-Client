import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from "../../../assets/Perfect DEAl.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa5, faUserAlt } from '@fortawesome/free-solid-svg-icons';
const HeaderNavbar = () => {
    const { user, logout } = useContext(AuthContext);
  
    const navigate = useNavigate();
    const handelLogout = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
    }
    const menu = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashBoard'>DashBoard</Link></li>
        <li><Link to='/blogs'>blogs</Link></li>


        {user?.uid ?
            <>
                {
                    user?.photoURL ?
                        <li>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt="" src={user?.photoURL} />
                                </div>
                            </div>
                        </li> :
                        <li><FontAwesomeIcon icon={faUserAlt} className='fa-2xl'></FontAwesomeIcon></li>
                }
                <li><button onClick={handelLogout}>Logout</button></li>
            </> :
            <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar navbarColor flex lg:justify-around justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52 text-black">
                        {menu}
                    </ul>
                </div>
                <img src={logo} className="w-[60px] rounded-full" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Perfect Deal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white text-lg">
                    {menu}
                </ul>

            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default HeaderNavbar;