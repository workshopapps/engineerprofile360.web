import { useContext } from "react";
import AuthContext from "../context/authProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
