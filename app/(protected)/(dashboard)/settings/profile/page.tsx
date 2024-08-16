"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Avatar } from "antd";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckSquareOutlined, EditOutlined } from "@ant-design/icons";

import { CustomSession } from "@/app/types/next-auth";
import { raleway } from "@/lib/fonts";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { message } from "antd";


const profileSchema = z.object({
  firstname: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(2, {
    message: "Phone number is required."
  }),
  title: z.string().min(2, {
    message: "Phone number is required."
  }),
  city: z.string().optional(),
});

const addressSchema = z.object({
  country: z.string().min(2, {
    message: 'Country must be at least 2 characters.'
  }),
  city: z.string().optional(),
  zipcode: z.string().optional(),
})

type ProfileFormValues = z.infer<typeof profileSchema>;

type AddressFormValues = z.infer<typeof addressSchema>;

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddressEdit, setIsAddressEdit] = useState(false);
  const [session, setSession] = useState<CustomSession | null>(null);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && data ) {
      setSession(data as CustomSession);
    } else {
      setSession(null);
    }
  }, [data, status]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleAddressEdit = () => {
    setIsAddressEdit(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
    form.reset() // Reset form values to the original data
  };

  const handleAddressCancel = () => {
    setIsAddressEdit(false);
    formAddress.reset()
  }


  const form = useForm<z.infer<typeof profileSchema>>({
  resolver: zodResolver(profileSchema),
  defaultValues: {
    firstname: session?.user.name || "Alfred",
    lastname: session?.user.lastName || "Wanjau",
    email: session?.user.email || 'markzuck@gmail.com',
    phone: '+327 555 1289',
    title: 'Founder',
    city: "Kigali, Rwanda",
  },
});

  const formAddress = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: "USA",
      city: "Palo Alto, California",
      zipcode: "86724",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof profileSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  };

  function onSubmitAddress(values: z.infer<typeof addressSchema>) {
    console.log(values)
  }

  const handleSave = (data: ProfileFormValues) => {
    setIsEditing(false); // Exit editing mode
    // Optional: Show a success message or perform other actions
    message.success("Profile updated successfully")
  };

  const handleSaveAddress = (data: AddressFormValues) => {
    // setAddressData(data);
    setIsAddressEdit(false)
    message.success("Address updated successfully.")
  }

  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid">
        <div className="md:flex gap-8 md:items-center">
          <Avatar size={60} />
          <div className={`${raleway.className} mt-3`}>
            <p className="text-auth-text-color font-semibold text-lg">Alfred Wanjau</p>
            <p className="text-[#949494] font-semibold text-[15px]">Creator</p>
            <p className="text-[#949494] font-semibold text-[14px]">Kigali, Rwanda</p>
          </div>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)} className="space-y-8 md:flex md:justify-between">
            <div className="md:w-[70%]">
              <p className="text-auth-text-color font-semibold text-[20px] mb-3">Personal Information</p>
              <div className="md:grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">First Name</FormLabel>
                      {isEditing ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{form.getValues("firstname")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">Last Name</FormLabel>
                      {isEditing ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{form.getValues("lastname")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">Email Address</FormLabel>
                      {isEditing ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{form.getValues("email")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">Phone</FormLabel>
                      {isEditing ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{form.getValues("phone")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">Title</FormLabel>
                      {isEditing ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{form.getValues("title")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {
              isEditing ? (
                <div className="md:relative top-10">
                  <Button type="submit" className="bg-[#004A39] text-[#BBFB00]">
                    Save Changes <CheckSquareOutlined className="ml-1"/>
                  </Button>
                  <Button style={{ marginLeft: "10px" }} onClick={handleCancel} className="bg-[#004A39] text-[#BBFB00]">
                    Cancel
                  </Button>
                </div>
              ) : (
                  <Button type="submit" onClick={handleEdit}
                    className="bg-transparent text-[#929292] border-solid border-[#929292] rounded-sm border-[1px] flex items-center gap-2">
                    Edit <EditOutlined className="text-[#929292] "/>
                  </Button>
              )
            }
          </form>
        </Form>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
          <Form {...formAddress}>
          <form onSubmit={formAddress.handleSubmit(handleSaveAddress)} className="space-y-8 md:flex md:justify-between">
            <div className="md:w-[70%]">
              <p className="text-auth-text-color font-semibold text-xl mb-3">Address</p>
              <div className="md:grid md:grid-cols-2 gap-8">
                <FormField
                  control={formAddress.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">Country</FormLabel>
                      {isAddressEdit ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{formAddress.getValues("country")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formAddress.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">City/State</FormLabel>
                      {isAddressEdit ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{formAddress.getValues("city")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formAddress.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#949494] font-semibold text-sm">ZIP Code</FormLabel>
                      {isAddressEdit ? (
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      ) : (
                        <p className="text-auth-text-color text-base font-semibold">{formAddress.getValues("zipcode")}</p>
                      )}
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

            </div>
            <div>
              {
                isAddressEdit ? (
                  <div className="md:relative md:top-9">
                    <Button type="submit" className="bg-[#004A39] text-[#BBFB00]">
                      Save Changes <CheckSquareOutlined className="ml-1"/>
                    </Button>
                    <Button style={{ marginLeft: "10px" }} onClick={handleAddressCancel} className="bg-[#004A39] text-[#BBFB00]">
                      Cancel
                    </Button>
                  </div>
                ) : (
                    <Button type="submit" onClick={handleAddressEdit}
                      className="bg-transparent text-[#929292] border-solid border-[#929292] rounded-sm border-[1px] flex items-center gap-2">
                      Edit <EditOutlined className="text-[#929292] "/>
                    </Button>
                )
              }
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MyProfile;
