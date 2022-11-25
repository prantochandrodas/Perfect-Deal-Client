import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllCategory from './AllCategory';

const HomeCategory = () => {
  
  const { data: productCategorys = [], isLoading } = useQuery({
    queryKey: ['productCategory'],
    queryFn: async () => {
      const res = fetch('http://localhost:5000/productCategorys');
      const data = (await res).json();
      return data;
    }
  });
console.log(productCategorys);
  if (isLoading) {
    return <p className='text-xl'>Loading...</p>
  }
  return (
    <div>
    
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-10 md:p-10'>
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