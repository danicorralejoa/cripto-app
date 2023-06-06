import axios from "axios";
import { useEffect, useState} from "react";

const usePetition = (endPoint) => {
    const API_URL = process.env.REACT_APP_API_KEY;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(true);

        axios.get(`${API_URL}${endPoint}`)
        .then((data) => {
            setLoading(false);
            setData(data.data.data);
        })
        .catch((error) =>{
            setLoading(false);
            console.warn('Se ha producido un error ' + error);
            return (
            <>
            <p> `Se ha producido un error {error}`</p>
            </>
             )
        })
            },[])
            
            return [data, loading]
}

export default usePetition