"use client";

import React from "react";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const router = useRouter();

  function handleSignIn() {
    router.push("/sign-in");
  }

  return (
    <main className="flex space-y-4 items-center justify-center h-screen flex-col">
      <h1 className="text-3xl uppercase tracking-wide font-thin md:text-6xl">
        app name
      </h1>
      <h5 className="text-lg text-muted-foreground w-[40%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet
        enim modi, ratione fuga saepe.
      </h5>
      <SignedOut>
        <Button onClick={handleSignIn}>Get Started</Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
};

export default HomePage;
