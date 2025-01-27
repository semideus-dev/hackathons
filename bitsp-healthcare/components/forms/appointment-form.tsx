"use client";

import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { createAppointment } from "@/lib/actions/appointment.actions";

const formSchema = z.object({
  date: z.date({
    required_error: "Date of Appointment is required",
  }),
  remarks: z
    .string({
      required_error: "Add information on why you need an Appointment",
    })
    .min(10, "Please provide more information"),
});

const AppointmentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await createAppointment(data);
    } catch (error) {
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] space-y-8 rounded-xl border p-4 md:w-[70%]"
      >
        <h1 className="text-center text-xl md:text-4xl">
          Schedule New Appointment
        </h1>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Appointment</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant={"outline"}>
                      {field.value ? format(field.value, "PPP") : <span></span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remarks</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          effect="expandIcon"
          icon={SendHorizonal}
          iconPlacement="right"
        >
          Send Request
        </Button>
      </form>
    </Form>
  );
};

export default AppointmentForm;
