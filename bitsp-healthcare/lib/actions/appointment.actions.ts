"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "./user.actions";

interface Appointment {
  date: Date;
  remarks: string;
}

export async function createAppointment(data: Appointment) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db.appointment.create({
    data: {
      ...data,
      patientId: user.id,
    },
  });
}
