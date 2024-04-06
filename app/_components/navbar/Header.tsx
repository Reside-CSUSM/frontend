"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import Avatar from "./Avatar";
import Logo from "../Logo";

export default function Header() {
  return (
    <div className="bg-[#262626] w-full border-b-[1px] border-[#373737] h-20 py-4 px-16 flex items-center justify-center z-10">
      <div className="w-full h-full relative font-light text-white">
        <div className="absolute left-1/2 top-1/2 text-3xl tracking-wider font-semibold transform -translate-x-1/2 -translate-y-1/2">
          <a href="/">
            <Logo />
          </a>
        </div>

        <div className="absolute left-0 top-1/2 text-lg transform -translate-y-1/2 flex flex-row space-x-8 items-center ">
          <Search className="relative border w-72 rounded-lg flex items-center" />
        </div>

        <div className="absolute right-0 top-1/2 text-lg transform -translate-y-1/2 flex flex-row space-x-8">
          <button className="hidden sm:block">Favorites</button>
          <button className="hidden sm:block">Help</button>
          <div
            onClick={() => {}}
            className="p-4 md:py-1 md:px-2 border border-[#606060] flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-sm transition"
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}