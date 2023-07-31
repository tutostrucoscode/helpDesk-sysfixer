import React from "react";
import Navigation from "@/features/navigation/navigation";
import MainContent from "@/features/main-content/main-content";

const Home = () => {
  return (
    <div className="flex flex-col w-full leading-5">
      <Navigation />
      <MainContent/>
    </div>
  );
};

export default Home;
