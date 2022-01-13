import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  RiLayoutGridFill,
  RiMoneyDollarBoxFill,
  RiMoneyDollarBoxLine,
  RiLogoutCircleRLine,
  RiSpam2Line,
} from "react-icons/ri";
import { AppProvider } from "../context/app-context";
import Profile from "../components/Profile";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear("token");
        localStorage.clear("profile");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  });

  return (
    <AppProvider>
      <div className="flex">
        <section className="w-64 flex-shrink-0 bg-slate-200 bg-opacity-25 h-screen flex flex-col justify-between">
          <div className="space-y-4">
            <Profile />
            <ul className="pt-5 cursor-pointer">
              <li className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25">
                <span>
                  <RiLayoutGridFill size={30} />
                </span>
                <p className="text-xl">Dashboard</p>
              </li>
              <li className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25">
                <span>
                  <RiMoneyDollarBoxFill size={30} />
                </span>
                <p className="text-xl">Pemasukan</p>
              </li>
              <li className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25">
                <span>
                  <RiMoneyDollarBoxLine size={30} />
                </span>
                <p className="text-xl">Pengeluaran</p>
              </li>
            </ul>
          </div>
          <ul className="cursor-pointer py-5">
            <li className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25">
              <span>
                <RiSpam2Line size={30} />
              </span>
              <p className="text-xl">Info</p>
            </li>
            <li
              className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25"
              onClick={logout}
            >
              <span>
                <RiLogoutCircleRLine size={30} />
              </span>
              <p className="text-xl">Logout</p>
            </li>
          </ul>
        </section>
        <section className="w-full h-24 bg-gray-400">hh</section>
      </div>
    </AppProvider>
  );
}
