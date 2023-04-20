import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllCategory from './AllCategory';
import './AllCategory.css'
import Spinner from '../../../Spinner/Spinner';
const HomeCategory = () => {
  
  const { data: productCategorys = [], isLoading } = useQuery({
    queryKey: ['productCategory'],
    queryFn: async () => {
      const res = fetch('https://perfect-deal-server.vercel.app/productCategorys');
      const data = (await res).json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <div className='bg-white pt-4'>
    <h1 className='my-2 text-3xl font-bold text-center text-color'>Product Category</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-10 p-2 md:p-10'>
        {
          productCategorys.map(productCategory => <AllCategory
            key={productCategory._id}
            productCategory={productCategory}
          ></AllCategory>)
        }
      </div>
    </div>
  );
};

export default HomeCategory;