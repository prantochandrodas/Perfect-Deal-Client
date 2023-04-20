import React from 'react';
import { Link } from 'react-router-dom';
import './AllCategory.css'
const AllCategory = ({ productCategory }) => {
    const { category_name, category_id, img } = productCategory;
    return (
       
        <div class="block rounded-lg p-4 bg-white drop-shadow-lg ease-in duration-300 hover:drop-shadow-2xl shadow-indigo-100 lg:w-[380px]">
            <img
                alt="Home"
                src={img}
                class="h-[350px] w-full rounded-md object-cover"
            />

            <div class="mt-2">
                <dl>
                    <div>
                       <p className='text-black text-2xl font-semibold'>{category_name}</p>
                    </div>
                    <div>
                       <p className='text-black font-medium'>Price Range : 5000-15000</p>
                    </div>
                    <div className="card-actions justify-end">
                         <Link to={`/products/${category_id}`}> <button  className="btn btn-primary rounded-3xl">See All</button></Link>
                      </div>
                </dl>

               
            </div>
        </div>
    );
};

export default AllCategory;