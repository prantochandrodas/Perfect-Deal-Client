import React from 'react';

const AllCategory = ({ productCategory }) => {
    const {Company_name,_id,img}=productCategory;
    return (
        <div className="card lg:w-80 sm:w-[90%] sm:mx-auto  shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-[400px] lg:h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{Company_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllCategory;