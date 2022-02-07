import { useContext, useEffect, useState } from "react";

import AdminContext from "../../context/AdminContext";
import { fetchNewProject, fetchTechnos, fetchAdmin } from "../../services/api";
import AdminAuth from "./AdminAuth";
import NewProject from "./NewProject";

function Admin() {
  const [technos, setTechnos] = useState<string[]>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const { isAuth, setIsAuth } = useContext(AdminContext);


  const technosList = async () => {
    const technos = await fetchTechnos();
    setTechnos(technos);
    setIsLoading(false);
  };

  useEffect(() => {
    technosList();
  }, []);

  return (
    <>
      {!isAuth ? (
        <div className="h-screen">
          <AdminAuth fetchAdmin={fetchAdmin} setIsAuth={setIsAuth} />
        </div>
      ) : (
        <>
          {!isLoading && technos ? (
            <NewProject
              isLoading={isLoading}
              technos={technos}
              fetchNewProject={fetchNewProject}
            />
          ) : (
            <p>Chargement en cours...</p>
          )}
        </>
      )}
    </>
  );
}

export default Admin;
