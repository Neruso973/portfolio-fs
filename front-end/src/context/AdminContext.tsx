//create UserContext
import { createContext } from "react";

interface Auth {
  isAuth: Boolean,
  setIsAuth: React.Dispatch<React.SetStateAction<Boolean>>,
}
export default createContext<Auth>({isAuth: false, setIsAuth(){}});
