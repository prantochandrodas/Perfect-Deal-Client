import { useEffect, useState } from "react";

const useAdmin=email=>{

    const [isAdmin,SetIsAdmin]=useState(false);
    const [isAdminLoading,SetIsAdminLoading]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://perfect-deal-server.vercel.app/user/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
              
                SetIsAdmin(data.isAdmin);
                SetIsAdminLoading(false);
            })
        }
    },[email])
    return[isAdmin,isAdminLoading];
}
export default useAdmin;