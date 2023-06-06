import axios from "axios";
import { useEffect, useState } from "react";

const useProfile = () => {
    const API_URL = "https://reqres.in/api/users/4"
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        axios.get(API_URL)
        .then((data) =>{
            setLoading(false);
            setUser(data.data.data);
        })
        .catch((e) => {
            setLoading(true);
            console.warn(`Error ${e}, ${API_URL}`)
        })
    },[]);
    return [user, loading]
    
}

export default useProfile;