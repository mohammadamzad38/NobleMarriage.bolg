import React from "react";
import Image from "next/image";
const RedButton = ({ text, disabled = false, icon, ...rest }) => {
  return (
    <button
      className="text-white w-[137px] h-[48px] bg-[#BA0060] border rounded-xl "
      disabled={disabled}
      {...rest}
    >
      {text}{" "}
      {icon && <Image src={icon} alt={"Button-Icon"} height={24} width={24} />}
    </button>
  );
};

export default RedButton;
