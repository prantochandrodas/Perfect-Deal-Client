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
    console.log(user);
    const [state, setState] = useState(false);
    const { data: getUser = [], isLoading, refetch } = useQuery({
        queryKey: ['getUser'],
        queryFn: () => fetch(`https://perfect-deal-server.vercel.app/getUser?email=${user?.email}`)
            .then(res => res.json())
    });
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        // { title: "blogs", path: "/blogs" },
        { title: "Product", path: "/allProduct" },
        { title: "MyOrder", path: "/myOrder" }
    ]

    const isOpen = false;



    const navigate = useNavigate();
    const handelLogout = () => {
        logout()
            .then(() => {
                navigate('/login')
                setState(!state)
            })
    }
    const handleSerch=event=>{
        event.preventDefault();
        const form=event.target;
        const serch=form.serch.value;
        console.log(serch);
        localStorage.setItem('serch_text',serch);
        navigate('/serch')
    }
    return (
        <nav className="navbarColor z-30 w-full nav-border  md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-2 md:block">
                    <div className='flex items-center justify-between'>
                        <a href="javascript:void(0)">
                            <img
                                src={logo}
                                width={80}
                                height={50}
                                alt="Float UI logo"
                            />
                        </a>
                        <fieldset className="w-full space-y-1 text-black md:mx-2 mx-2 md:mt-0">
                            <label for="Search" className="hidden">Search</label>
                            <form className="relative" onSubmit={handleSerch}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button title="search" className="p-1 focus:outline-none focus:ring text-black">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-black">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input name='serch' type="text" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                            </form>
                        </fieldset>
                    </div>
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
                    <ul className="navtext-color  justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="navtext-color  hover:text-indigo-600">
                                        <NavLink to={item.path} onClick={() => setState(!state)}>
                                            {item.title}
                                        </NavLink>
                                    </li>

                                )
                            })
                        }
                        <li><NavLink to='/wishList'>My WishList</NavLink></li>
                        {
                            getUser?.role === "seller" ?
                                <>
                                    <li><NavLink onClick={() => setState(!state)} to='/addProduct'>Add Product</NavLink></li>
                                    <li><NavLink onClick={() => setState(!state)} to='/myproducts'>My products</NavLink></li>
                                </> :
                                <></>
                        }
                        {
                            getUser?.role === "admin" ?
                                <>
                                    <li><NavLink onClick={() => setState(!state)} to='/allusers'>All Users</NavLink></li>
                                    <li><NavLink onClick={() => setState(!state)} to='/allSellers'>All Seller</NavLink></li>
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
                            <Link to='/login'><a className="inline-block rounded-full   hover:text-white focus:outline-none focus:ring active:text-opacity-75 btn-color"><button onClick={() => setState(!state)} className="block rounded-full  px-4 py-2  font-medium">Login</button></a></Link>
                            <Link to='/signup'><a
                                className="inline-block rounded-full btn-bg-color p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ml-2"
                            ><button onClick={() => setState(!state)} className="block rounded-full navtext-color px-4 py-2  font-medium hover:bg-transparent">SignUp</button></a></Link>
                        </div>
                    }
                </div>
            </div>
        </nav>

    );
};

export default HeaderNavbar;