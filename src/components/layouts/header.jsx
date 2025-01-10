import React from "react";
import Image from "next/image";
import Link from "next/link";
import RedButton from "../buttons/red-button";

const Header = () => {
  return (
    <header className=" fixed top-8 left-[160px] right-[160px] items-start">
      <div className="flex  backdrop-blur-3xl px-8 py-2 border rounded-2xl justify-between items-center w-full">
        <div>
          <Link href={"/"}>
            <Image
              src="/images/logo.svg"
              alt="NobleMarriage-Logo"
              width={130}
              height={55.61}
            />
          </Link>
        </div>
        <nav>
          <div className="flex w-full justify-center gap-12 items-center">
            <div className="flex text-[#310048] gap-9 ">
              <Link href={"/"}>Home</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/how-it-works"}>How it works</Link>
            </div>
            <RedButton text="Register Now" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
