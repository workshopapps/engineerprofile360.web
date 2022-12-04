import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

import { OverlayLoader } from "../styles/reusableElements.styled";

const PersistLogin = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { setAuth, auth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const loggedInUser = localStorage.getItem("Eval360");
    if (isMounted) {
      loggedInUser !== null && setAuth(JSON.parse(loggedInUser));
      setIsLoading(false);
    }
    return () => (isMounted = false);
  }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   const verifyRefreshToken = async () => {
  //     try {
  //       await refresh();
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       isMounted && setIsLoading(false);
  //     }
  //   };

  //   !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

  //   return () => (isMounted = false);
  // }, []);

  return <>{!auth ? <Outlet /> : isLoading ? <OverlayLoader /> : <Outlet />}</>;

  // Will be refactored
};

export default PersistLogin;
