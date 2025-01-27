import React from "react";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const DashboardPage = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-2 text-2xl font-thin tracking-wide md:text-4xl">
        Hello, {user.firstName} {user.lastName}
      </h1>
      <Link href={"/appointment/new"}>
        <Button>Request Appointment</Button>
      </Link>
    </div>
  );
};

export default DashboardPage;
