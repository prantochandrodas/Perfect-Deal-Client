import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
const AddProduct = () => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handelAddProduct = data => {

        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    // get verify from 

                    const addProduct = {
                        category_name: '',
                        category_id: data.category_id,
                        picture: imgData.data.url,
                        product_name: data.product_name,
                        saller_name: data.saller_name,
                        condition: data.condition,
                        location: data.location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        year_of_use: data.year_of_use,
                        posted_date: data.posted_date,
                        verified: 'verified',
                        sold_status: "available",
                        email:user?.email,
                        advertise:false,
                        paid:false
                    }

                    fetch('https://perfect-deal-server.vercel.app/addProduct', {
                        method: 'POST',
                        headers: {
                          'content-type':'application/json',
                          authorization:`bearar ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)

                    })
                        .then(res => res.json())
                        .then(result => {
                            if(result.acknowledged){
                                toast.success('Add Product successfull', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                                    
                                navigate('/dashBoard/myproducts')
                            
                            }
                            
                        })

                }
            })



    }

    
    return (
        <div className='w-[75%] p-7 '>
            <h2 className='text-3xl font-bold'>Add a Product</h2>
            <form onSubmit={handleSubmit(handelAddProduct)}>

                {/* name */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text text-xl font-bold">Name</span></label>
                    <input type="text"
                        {...register("saller_name", { required: "Name is required" })}
                        className="input input-bordered w-full " />
                    {errors.saller_name && <p className='text-red-600'>{errors.saller_name?.message}</p>}
                </div>
                {/* product name  */}
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Product Name</span></label>
                    <input type="text"
                        {...register("product_name", { required: "Product Name is required" })}
                        className="input input-bordered w-full " />
                    {errors.product_name && <p className='text-red-600'>{errors.product_name?.message}</p>}
                </div>
                {/* picture  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="text-xl font-bold label-text">Photo</span></label>
                    <input type="file"
                        {...register("picture", { required: "picture is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.picture && <p className='text-red-600'>{errors.picture?.message}</p>}
                </div>

                {/* location  */}
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">location</span></label>
                    <input type="text"
                        {...register("location", { required: "Location is required" })}
                        className="input input-bordered w-full " />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>

                {/* resale price  */}
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Resale Price</span></label>
                    <input type="number"
                        {...register("resale_price", { required: "Resale Price is required" })}
                        className="input input-bordered w-full " />
                    {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}
                </div>

                {/* original price      */}
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Original Price</span></label>
                    <input type="number"
                        {...register("original_price", { required: "original_price is required" })}
                        className="input input-bordered w-full " />
                    {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}
                </div>
                {/* Year of use   */}
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Year of use</span></label>
                    <input type="text"
                        {...register("year_of_use", { required: "year_of_use is required" })}
                        className="input input-bordered w-full " />
                    {errors.year_of_use && <p className='text-red-600'>{errors.year_of_use?.message}</p>}
                </div>
                {/* posted date  */}
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Date</span></label>
                    <input type="date"
                        {...register("posted_date", { required: "Date is required" })}
                        className="input input-bordered w-full " />
                    {errors.posted_date && <p className='text-red-600'>{errors.posted_date?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Category Name</span></label>
                    <select
                        {...register("category_id", { required: "Category is required" })}
                        className="select input-bordered w-full ">

                        <option value='637fb27d3ba544d24ee74af1'>Flagship phones</option>
                        <option value='637e7c7b0abc7dd2ee18b068'>Budget phones</option>
                        <option value='637e7c7b43258e13c236a04b'>Midrange budget phone</option>
                    </select>
                    {errors.category_id && <p className='text-red-600'>{errors.category_id?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="text-xl font-bold label-text">Condition</span></label>
                    <select
                        {...register("condition", { required: "condition is required" })}
                        className="select input-bordered w-full ">

                        <option value='excellent'>Excellent</option>
                        <option value='Good'>Good</option>

                    </select>
                    {errors.specialty && <p className='text-red-600'>{errors.specialty?.message}</p>}
                </div>
                <input type="submit" className='btn btn-accent w-full my-5'  value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddProduct;