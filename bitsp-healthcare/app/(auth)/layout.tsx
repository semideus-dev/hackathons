import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Authentication"
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <section className="hidden flex-col items-center bg-primary p-10 text-primary-foreground lg:flex">
        <div className="flex items-center space-x-4">
          {/* Add brand logo here */}

          <h1 className="text-3xl font-light uppercase">Healthcare</h1>
        </div>
        <div className="mt-10 space-y-5 text-center">
          <h1 className="text-3xl font-medium">Your Health, Simplified</h1>
          <p className="text-xs">
          Seamlessly manage your health and care.  <br/> Access records, find
            hospitals, and schedule appointments—all in one place.
          </p>
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg:p-10">
        {children}
      </section>
    </main>
  );
}
