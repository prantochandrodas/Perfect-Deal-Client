import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllCategory from './AllCategory';

const HomeCategory = () => {
  const {data:productCategorys=[],isLoading}=useQuery({
    queryKey:['productCategory'],
    queryFn:async()=>{
        const res=fetch('http://localhost:5000/productCategorys');
        const data=(await res).json();
        return data;
    }
  });

  if(isLoading){
    return <p className='text-xl'>Loading...</p>
  }
    return (
       <div className='grid lg:grid-cols-3 gap-5 lg:p-10 sm:p-4'>
            {
                productCategorys.map(productCategory=><AllCategory 
                    key={productCategory._id}
                    productCategory={productCategory}
                ></AllCategory>)
            }
       </div>
    );
};

export default HomeCategory;