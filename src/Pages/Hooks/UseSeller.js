import { useEffect, useState } from "react";

const UseSeller=email=>{

    const [isSeller,SetIsSeller]=useState(false);
    const [isSellerLoading,SetIsSellerLoading]=useState(true);
    console.log(isSeller);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                 console.log(data.isSeller);
                SetIsSeller(data.isSeller);
                SetIsSellerLoading(false);
            })
        }
    },[email])
    return[isSeller,isSellerLoading];
}
export default UseSeller;