import React, { useEffect } from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import PageHeader from "./components/homepage/PageHeader";
import Footer from "./components/homepage/Footer";
import Hiring from "./pages/Hiring";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { FaRobot } from "react-icons/fa6";
import ChatBot from "./pages/ChatBot";
import Chat from "./pages/Chat";
import { getCookie } from "./Cookies/Cookie";
import Suppliers from "./pages/Suppliers";
import SuppliersDetailPage from "./components/suppliers/SuppliersDetailPage";
import Subscriptions from "./pages/Subscriptions";

const EntryApp = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const accessToken = getCookie("access_token");
    if (pathname !== "/login" || pathname !== "/signup") {
      if (!accessToken) {
        navigate("/login");
      }
    }
  }, []);
  return (
    <div className="relative bg-[#F8F9FA] overflow-hidden">
      <div>
        <PageHeader />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route
          path="/suppliers/:supplier_id"
          element={<SuppliersDetailPage />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <Outlet />
      </div>
      <Footer />

      <button
        onClick={() => navigate("/chatbot")}
        className={`${
          pathname == "/chatbot" ||
          pathname == "/chat" ||
          pathname == "/login" ||
          pathname == "/signup"
            ? "hidden"
            : ""
        } fixed bg-blue-500 hover:bg-blue-600 transition-colors duration-300  text-white text-3xl rounded-full p-4 bottom-8 right-8`}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg> */}
        <FaRobot />
      </button>
    </div>
  );
};

export default EntryApp;
