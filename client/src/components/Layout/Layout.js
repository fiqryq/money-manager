import { auth } from "../../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AppProvider } from "../../context/app-context";
import Sidebar from "./Sidebar";
import { useCallback } from "react/cjs/react.development";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        localStorage.clear("token");
        localStorage.clear("profile");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  return (
    <AppProvider>
      <div className="flex">
        <Sidebar Logout={logout} />
        <section className="w-full">{children}</section>
      </div>
    </AppProvider>
  );
}
