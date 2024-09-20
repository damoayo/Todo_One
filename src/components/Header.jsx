import React from "react";

const Header = () => {
  return (
    <div>
      <h3 className="font-bold">오늘은 📆</h3>
      <span className="text-2xl text-[#2593ff]">{new Date().toDateString()}</span>
    </div>
  );
};

export default Header;
