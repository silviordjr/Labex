import React, {useEffect} from "react";
import { useHistory } from "react-router";


export const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        history.push("/login");
      }
    }, [history]);
  };