import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/img2.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../Hooks/useToken';
const Login = () => {
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const { login, createUserWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const { register, handleSubmit, formState: { errors } } = useForm();
    if (token) {
        navigate(from, { replace: true });
    }
    const handelLogin = data => {
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(result);
                setLoginUserEmail(data?.email)

            })
    }

    const handelGoogleSignup = () => {
        createUserWithGoogle(provider)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user?.email);
                
                const users = {
                    name: user?.displayName,

                }

                fetch(`http://localhost:5000/googleUser?email=${user?.email}&name=${user?.displayName}`, {
                    method: 'PUT',


                })
                    .then(res => res.json())
                    .then(data => {


                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left hidden lg:block">

                    <img src={img} className="w-9/12" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center my-5">Login</h1>
                    <form onSubmit={handleSubmit(handelLogin)} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register("email", { required: "Email Address is required" })}
                                type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  {...register("password", { required: "Password Address is required" })}
                                type="password" placeholder="Password" className="input input-bordered" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className='p-5'>
                        <Link to='/signup'>  <button className='btn  btn-outline font-bold w-full my-3'>Sign up with email  </button></Link>
                        <button onClick={handelGoogleSignup} className='btn btn-outline  font-bold w-full'>Sign up with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;