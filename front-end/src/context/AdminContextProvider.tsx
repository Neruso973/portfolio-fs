import { useState } from "react";
import { ReactChildren, ReactChild } from "react";

import AdminContext from "./AdminContext";


interface Auth {
  isAuth: boolean,
  setIsAuth: React.Dispatch<React.SetStateAction<Boolean>>,
}

interface Props {
  children: ReactChild | ReactChildren;
}

const UserContextProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<Boolean>(false);

  return (
    <AdminContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AdminContext.Provider>
  );
};

export default UserContextProvider;
