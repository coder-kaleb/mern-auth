import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };
  return { logout };
};
