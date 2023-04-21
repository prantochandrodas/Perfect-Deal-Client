import React, { useContext, useState } from 'react';
import { NavLink, useNavigate, NavNavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from "../../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa5, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './HeaderNavbar.css'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';
const HeaderNavbar = () => {
       const { user, logout } = useContext(AuthContext);
    const [state, setState] = useState(false)
    const { data: getUser = [], isLoading, refetch } = useQuery({
        queryKey: ['getUser'],
        queryFn: () => fetch(`https://perfect-deal-server.vercel.app/getUser?email=${user?.email}`)
            .then(res => res.json())
    });
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "blogs", path: "/blogs" },
        {title:"Product",path:"/allProduct"},
        { title: "DashBoard", path: "/dashBoard" }
    ]

    const isOpen = false;

 

    const navigate = useNavigate();
    const handelLogout = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
    }
if(isLoading){
    return <Spinner></Spinner>
}
    return (
        <nav className="navbarColor z-30 w-full nav-border  md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-2 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={80}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-color text-border outline-none p-2 rounded-md  focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="text-color  justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-color  hover:text-indigo-600">
                                        <NavLink to={item.path}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                   
                                )
                            })
                        }
                         {
                            getUser?.role === "seller" ?
                                <>
                                    <li><NavLink to='/dashBoard/addProduct'>Add Product</NavLink></li>
                                    <li><NavLink to='/dashBoard/myproducts'>My products</NavLink></li>
                                </> :
                                <></>
                        }
                        {
                            getUser?.role === "admin" ?
                                <>
                                    <li><NavLink to='/dashBoard/allusers'>All Users</NavLink></li>
                                    <li><NavLink to='/dashBoard/allSellers'>All Seller</NavLink></li>
                                </> :
                                <></>
                        }
                    </ul>
                </div>
                <div className={`md:inline-block ${state ? 'block' : 'hidden'}`} >
                    {user?.uid ?
                        <div className='flex mt-4 lg:mt-0 mb-4 lg:mb-0'>
                            {
                                user?.photoURL ?
                                    <div className="avatar online">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt='profile' />
                                        </div>
                                    </div>
                                    :
                                    <li><FontAwesomeIcon icon={faUserAlt} className='fa-2xl'></FontAwesomeIcon></li>
                            }
                            <Link
                                class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            ><button class="block rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-transparent" onClick={handelLogout}>Logout</button></Link>
                        </div> :
                        <div className='flex mt-4 lg:mt-0 mb-4 lg:mb-0'>
                            <Link to='/login'><a className="inline-block rounded-full   hover:text-white focus:outline-none focus:ring active:text-opacity-75 btn-color"><button className="block rounded-full  px-4 py-2  font-medium">Login</button></a></Link>
                            <Link to='/signup'><a
                                className="inline-block rounded-full btn-bg-color p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ml-2"
                            ><button className="block rounded-full text-color px-4 py-2  font-medium hover:bg-transparent">SignUp</button></a></Link>
                        </div>
                    }
                </div>
            </div>
        </nav>

    );
};

export default HeaderNavbar;