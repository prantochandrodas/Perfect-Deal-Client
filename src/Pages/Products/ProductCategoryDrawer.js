import React from 'react';
import logo from "../../assets/Perfect DEAl.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
const ProductCategoryDrawer = () => {
    const { data: productCategorys = [], isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = fetch('http://localhost:5000/productCategorys');
            const data = (await res).json();
            return data;
        }
    });
  if(isLoading){
    return <Spinner></Spinner>
  }
    return (
        <div className='hidden lg:block md:hidden'>
            <div className="drawer drawer-mobile border border-slate-300 h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                    <h1 className='text-xl mt-4 font-bold '>Product Category</h1>
                        {
                            productCategorys.map(productCategory => <>
                                <ul className='flex items-center ml-3 mt-5 productUl '>
                                    <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>
                                    <Link to={`/products/${productCategory.category_id}`}> <li className='p-[10px] text-sm font-bold'>{productCategory.category_name}</li> </Link>
                                </ul>
                            </>)
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductCategoryDrawer;