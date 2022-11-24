import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/img2.jpg'
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelsignup = data => {

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left hidden lg:block">

                    <img src={img} className="w-9/12" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center my-5">Sign Up</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Email Address is required" })} placeholder="email" className="input input-bordered" />
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
                            {errors.password && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <select
                             {...register("role", { required: "Select the role" })}
                            className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Role</option>
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
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