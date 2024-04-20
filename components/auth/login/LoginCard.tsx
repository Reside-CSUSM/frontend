"use client";

import React from "react";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const router = useRouter();

  return (
    <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-40 mx-auto max-w-[50rem] h-full lg:h-auto md:h-auto md:max-w-[450px]">
      <div
        className="transition h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative
              flex flex-col w-full bg-neutral-700 outline-none focus:outline-none "
      >
        {/* HEADER */}
        <div className="flex items-center p-6 rounded-t justify-center border-[#525252] relative border-b-[1px]">
          <div className="text-xl font-semibold text-neutral-200">
            Welcome back!
          </div>
        </div>

        {/* BODY */}
        <div className="relative p-6 flex-auto">
          <LoginForm
            handleBackRef={() => {
              router.push("/auth/register");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
