import { createContext, useEffect, useState } from "react";
import useProfile from "../Components/hooks/useProfile";

const UserContext = createContext();

const UserContextProvider = ( { children }) => {
    const [user, loading] = useProfile();
    const [usuario, setUsuario] = useState({});
    
    useEffect(() => {
        if (user) {
          setUsuario({
            name: user.first_name + " " + user.last_name,
            avatar: user.avatar
          });
        }
      }, [user]);
   
    return(
        <UserContext.Provider value={ usuario }>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }