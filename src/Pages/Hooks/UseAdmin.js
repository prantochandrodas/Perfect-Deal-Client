import { useEffect, useState } from "react";

const useAdmin=email=>{

    const [isAdmin,SetIsAdmin]=useState(false);
    const [isAdminLoading,SetIsAdminLoading]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data.isAdmin);
                SetIsAdmin(data.isAdmin);
                SetIsAdminLoading(false);
            })
        }
    },[email])
    return[isAdmin,isAdminLoading];
}
export default useAdmin;