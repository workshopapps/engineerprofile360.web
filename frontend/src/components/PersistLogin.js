import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

import { OverlayLoader } from "../styles/reusableElements.styled";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const loggedInUser = localStorage.getItem("EvalOrg");
      loggedInUser && setAuth(JSON.parse(loggedInUser));
      setIsLoading(false);
    }

    return () => (isMounted = false);

    // const verifyRefreshToken = async () => {
    //   try {
    //     await refresh();
    //   } catch (err) {
    //     console.error(err);
    //   } finally {
    //     isMounted && setIsLoading(false);
    //   }
    // };

    // !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    // return () => (isMounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!auth ? <Outlet /> : isLoading ? <OverlayLoader /> : <Outlet />}</>;
  // return { isLoading };
};

export default PersistLogin;
