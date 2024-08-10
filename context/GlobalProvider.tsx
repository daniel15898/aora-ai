import { getCurrentUser } from "@/lib/appwrite";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Models } from "react-native-appwrite";



export type GlobalContextDataType = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: Models.Document | null;
  setUser: React.Dispatch<React.SetStateAction<Models.Document | null>>
  loading: boolean;
};

export const GlobalContext = createContext<GlobalContextDataType|undefined>(undefined);


const GlobalProvider = ({ children }: { children: React.JSX.Element }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<Models.Document | null>(null);
  const [loading, setLoading] = useState(true);

  const setLogged = (status:boolean) =>{
    setIsLogged(status)
  }

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
