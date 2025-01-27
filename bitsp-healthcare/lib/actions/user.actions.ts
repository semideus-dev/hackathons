"use server";

import { db } from "@/lib/db";

interface User {
  clerkId: string;
  first_name: string;
  last_name: string;
  email: string;
}

export async function createUser(user: User) {
  return await db.user.create({
    data: user,
  });
}

export async function getDoctors() {
  return await db.user.findMany({
    where: {
      role: "DOCTOR",
    },
  });
}

export async function getUserByClerkId(clerkId: string) {
  return await db.user.findUnique({
    where: {
      clerkId,
    },
  });
}