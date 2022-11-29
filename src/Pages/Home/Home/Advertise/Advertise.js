import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = ({ product }) => {

    const { paid, product_name, picture } = product;
    console.log(product);
    return (
        <div>

            {product?.paid && product.paid === true ?
                <div className='hidden'>
                    No product found
                </div>
                :
                <div>
                    <div className="card card-compact w-46 bg-base-100 shadow-xl">
                        <figure><img src={picture} className="lg:h-[300px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_name}</h2>
                        </div>
                    </div>
                </div>

            }

        </div>
    );
};

export default Advertise;