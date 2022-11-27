import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from "../../../assets/Perfect DEAl.png"
const HeaderNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user);
    const navigate =useNavigate();
    const handelLogout = () => {
        logout()
            .then(() => { 
                navigate('/login')
            })
    }
    const menu = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashBoard'>DashBoard</Link></li>

        {user?.uid ?
            <li><button onClick={handelLogout}>Logout</button></li> :
            <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar navbarColor text-white flex lg:justify-around justify-between">
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
                <Link to='/' className="btn btn-ghost normal-case text-xl">Perfect Deal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menu}
                </ul>
            </div>

        </div>
    );
};

export default HeaderNavbar;