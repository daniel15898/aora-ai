import { GlobalContext } from "@/context/GlobalProvider";
import { useContext } from "react";

export const useGlobalContext = () => {
    const data = useContext(GlobalContext);
    if(data){
      return data
    }
    else{
      throw new Error("you must use this hook under the GlobalContext provider")
    }
  }