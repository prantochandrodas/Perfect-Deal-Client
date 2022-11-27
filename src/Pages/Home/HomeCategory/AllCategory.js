import React from 'react';
import { Link } from 'react-router-dom';

const AllCategory = ({ productCategory }) => {
    const {category_name,category_id,img}=productCategory;
    return (
        <div className="card lg:w-80   md:mx-auto  shadow-xl">
            
            <figure><img src={img} alt="Shoes" className='md:h-[300px] h-[250px] lg:h-[300px] p-3' /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>Get your favorite product of your buget range </p>
                <div className="card-actions justify-end">
                   <Link to={`/products/${category_id}`}> <button  className="btn btn-primary">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllCategory;