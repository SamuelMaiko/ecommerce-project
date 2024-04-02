import React, { useEffect } from "react";
import SubscriptionCard from "../components/subscriptions/SubscriptionCard";
import { SUBSCRIPTION_TIERS } from "../FakeData/SubscriptionTiers";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../Cookies/Cookie";

const Subscriptions = () => {
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
    <div className="w-full">
      <div className="w-[90%] md:h-screen pb-[2rem] md:pb-0 mx-auto">
        <h1 className="font-heading text-xl md:text-3xl font-semibold my-4">
          Subscriptions Plans
        </h1>
        {/* start  */}
        <div className="flex flex-col md:grid grid-cols-3 gap-[1.25rem]">
          {SUBSCRIPTION_TIERS.map((tier, index) => {
            return <SubscriptionCard key={index} {...tier} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
