import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/img2.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
const Signup = () => {
    const navigate=useNavigate();
    const {createUser}=useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelSignUp = data => {
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        // console.log(data)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left hidden lg:block">

                    <img src={img} className="w-9/12" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center my-5">Sign Up</h1>
                    <form onSubmit={handleSubmit(handelSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name Address is required" })} placeholder="email" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>

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
                        <div className="form-control">
                            <select
                             {...register("role", { required: "Select the role" })}
                            className="select select-bordered w-full max-w-xs">
                                 
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                            {errors.role && <p className='text-red-600'>{errors.role?.message}</p>}
                        </div>
                        <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;