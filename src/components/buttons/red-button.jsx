import React from "react";
import Image from "next/image";
const RedButton = ({ text, disabled = false, icon, ...rest }) => {
  return (
    <button
      className="flex gap-3 justify-center items-center text-white p-2  h-[48px] bg-[#BA0060] border rounded-xl "
      disabled={disabled}
      {...rest}
    >
      {text}{" "}
      {icon}
    </button>
  );
};

export default RedButton;
