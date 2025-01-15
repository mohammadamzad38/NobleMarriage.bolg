import React from "react";
import Image from "next/image";
import Link from "next/link";
import RedButton from "../buttons/red-button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 lg:top-8 lg:left-[160px] lg:right-[160px] items-start">
      <div className="flex backdrop-blur-3xl px-8 py-2 border lg:rounded-2xl justify-between items-center w-full">
        <div>
          <Link href={"/"}>
            <Image
              className="object-cover"
              src="/images/logo.svg"
              alt="NobleMarriage-Logo"
              width={130}
              height={55.61}
            />
          </Link>
        </div>
        <nav className="lg:block hidden">
          <div className=" flex md:flex-row flex-col w-full justify-center gap-12 items-center">
            <div className="flex md:flex-row flex-col text-[#310048] gap-9 ">
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
