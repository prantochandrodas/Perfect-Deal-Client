import React from 'react';
import { Link } from 'react-router-dom';
import './AllCategory.css'
const AllCategory = ({ productCategory }) => {
    const { category_name, category_id, img } = productCategory;
    return (

        // <div class="block rounded-lg p-4 bg-white drop-shadow-lg ease-in duration-300 hover:drop-shadow-2xl shadow-indigo-100 lg:w-[380px]">
        //     <img
        //         alt="Home"
        //         src={img}
        //         class="h-[350px] w-full rounded-md object-cover"
        //     />

        //     <div class="mt-2">
        //         <dl>
        //             <div>
        //                <p className='text-black text-2xl font-semibold'>{category_name}</p>
        //             </div>
        //             <div>
        //                <p className='text-black font-medium'>Price Range : 5000-15000</p>
        //             </div>
        //             <div className="card-actions justify-end">
        //                  <Link to={`/products/${category_id}`}> <button  className="btn btn-primary rounded-3xl">See All</button></Link>
        //               </div>
        //         </dl>


        //     </div>
        // </div>
        <Link to={`/products/${category_id}`} class="group relative block bg-black rounded">
            <img
                alt="Developer"
                src={img}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                     {category_name}
                </p>

               

                <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-sm text-white">
                            You will find all the <br /> {category_name} phones here. <br /> Get the best phone that <br /> you want to buy.
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AllCategory;