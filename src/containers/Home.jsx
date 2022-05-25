import React from "react";
import List from "../components/List/List";
import logo from "../assets/img/logo192.png";

const Home = () => {
  return (
    <div className="h-screen w-full relative px-3 py-3 bg-gray-900 overflow-scroll">
      <div className="w-full bg-slate-600 p-4 gap-4 flex item-center mb-3 justify-center rounded-lg">
        <img src={logo} alt="logo" className="w-20 h-20 object-cover" />
        <h6 className="flex items-center font-bold text-stone-50 text-xl">Games Database</h6>
      </div>
      <List />
    </div>
  );
};

export default Home;
