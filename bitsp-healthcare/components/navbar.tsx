import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { HeartPulse } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between border-b p-4 px-10 backdrop-blur-lg">
      <div className="flex items-center space-x-2">
        <HeartPulse />
        <h1 className="text-lg font-thin uppercase tracking-wide">
          Healthcare
        </h1>
      </div>
      <UserButton
        appearance={{ baseTheme: dark }}
        userProfileProps={{ appearance: { baseTheme: dark } }}
      />
    </nav>
  );
};

export default Navbar;
