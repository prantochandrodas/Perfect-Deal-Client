import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/img2.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../Hooks/UseToken';
import login from '../../dlf10_W7sz3YEElT.json';
import Lottie from 'react-lottie';
import Spinner from '../../Spinner/Spinner';
const Signup = () => {
    const [loading,SetLoading]=useState(false);
    const {user}=useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('');
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imgHostKey);
    const navigate = useNavigate();
    const { createUser, updateUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);

    if (token) {
        navigate('/');
    }
    const handelSignUp = data => {
        SetLoading(true);
        setSignUpError('');
        createUser(data.email, data.password, data.role)
            .then(result => {
         
                const image = data.picture[0];
                console.log(image);
                const formData = new FormData();
                formData.append('image', image);
                const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
                fetch(url, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                      console.log(imgData)
                        if (imgData.success) {

                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url, 
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data.name, data.role, data.email);
                                })
                                .catch(error => console.log(error))
                      
                        }
                    })
                    .catch(err=>{
                        setSignUpError(err.message);
                    })



            })
  
    }

    const saveUser = (name, role, email) => {
        const users = {
            name,
            role,
            email

        }
        fetch('https://perfect-deal-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
                setCreateUserEmail(email);
            })
            .catch(err=>console.log(err))
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:login ,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <div className="text-center lg:text-left hidden lg:block">

                         <div>
                            <Lottie options={defaultOptions}
                                height={600}
                                width={500} />
                        </div>
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file"
                                {...register("picture", { required: "picture is required" })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.picture && <p className='text-red-600'>{errors.picture?.message}</p>}
                        </div>
                        <div className="form-control">
                            <select
                                {...register("role", { required: "Select the role" })}
                                className="select select-bordered w-full max-w-xs">
                                <option disabled value='buyer'>Buyer</option>
                                <option value='buyer'>Buyer</option>
                                <option value='seller'>Seller</option>
                            </select>
                            {errors.role && <p className='text-red-600'>{errors.role?.message}</p>}
                        </div>
                        <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div>
                            {signUpError && <p className='text-red-600 my-4 text-xl'>{signUpError}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;