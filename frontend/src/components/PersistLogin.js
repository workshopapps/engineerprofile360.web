import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

import { OverlayLoader } from "../styles/reusableElements.styled";

const PersistLogin = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { setAuth, persist, auth } = useAuth();
  const isMounted = useRef(true);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("EvalOrg");

  //   if (isMounted) {
  //     loggedInUser !== null && setAuth(JSON.parse(loggedInUser));
  //     setIsLoading(false);
  //   }
    // return () => (isMounted.current = false);
  // }, [isMounted]);


  useEffect(() => {
    let isMounted = true;

  const verifyRefreshToken = async () => {
    try {
      await refresh();
    } catch (err) {
      console.error(err);
    } finally {
      isMounted && setIsLoading(false);
    }
  };

  !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

  return () => (isMounted = false);

  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <OverlayLoader /> : <Outlet />}</>
  );

  // Will be refactored
};

export default PersistLogin;
