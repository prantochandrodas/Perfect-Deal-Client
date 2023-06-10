import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import AllProduct from '../AllProducts/AllProduct';

const SerchProduct = () => {
    const getText = localStorage.getItem('serch_text');
    console.log(getText);
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        fetch(`https://perfect-deal-server.vercel.app/serch/${getText}`)
            .then(res => res.json())
            .then(result => {
                setDatas(result);
                setLoading(false);
                navigate('/serch')
            });
    }, [getText, navigate]);
    if (loading) {
        return <Spinner></Spinner>
    }
    console.log(datas);
    return (
        <div>
            {
               datas?.length==0?<p className='font-bold flex min-h-screen justify-center items-center'>No product found with this name</p>:<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-10 p-2 md:p-10'>
               {datas.map(data => <AllProduct
                   data={data}
                   key={data._id}
               ></AllProduct>)}
           </div> 
            }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-10 p-2 md:p-10'>
                {datas.map(data => <AllProduct
                    data={data}
                    key={data._id}
                ></AllProduct>)}
            </div>
        </div>
    );
};

export default SerchProduct;