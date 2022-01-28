import {
  RiLayoutGridFill,
  RiMoneyDollarBoxFill,
  RiMoneyDollarBoxLine,
  RiLogoutCircleRLine,
  RiSpam2Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Profile from "../Profile";

export default function Sidebar({ Logout }) {
  return (
    <section className="w-64 flex-shrink-0 bg-slate-200 bg-opacity-25 h-screen flex flex-col justify-between">
      <div className="space-y-4">
        <Profile />
        <div className="pt-5 cursor-pointer">
          <Link
            to="/dashboard"
            className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25"
          >
            <span>
              <RiLayoutGridFill size={30} />
            </span>
            <p className="text-xl">Dashboard</p>
          </Link>
          <Link
            to="/pemasukan"
            className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25"
          >
            <span>
              <RiMoneyDollarBoxFill size={30} />
            </span>
            <p className="text-xl">Pemasukan</p>
          </Link>
          <Link
            to="/pengeluaran"
            className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25"
          >
            <span>
              <RiMoneyDollarBoxLine size={30} />
            </span>
            <p className="text-xl">Pengeluaran</p>
          </Link>
        </div>
      </div>
      <ul className="cursor-pointer py-5">
        <Link
          to="/info"
          className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25"
        >
          <span>
            <RiSpam2Line size={30} />
          </span>
          <p className="text-xl">Info</p>
        </Link>
        <div
          className="p-3 flex items-center px-7 space-x-4 hover:bg-gray-300 hover:bg-opacity-25"
          onClick={Logout}
        >
          <span>
            <RiLogoutCircleRLine size={30} />
          </span>
          <p className="text-xl">Logout</p>
        </div>
      </ul>
    </section>
  );
}
