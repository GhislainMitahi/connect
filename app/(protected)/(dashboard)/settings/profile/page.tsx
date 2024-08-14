"use client";

import { Avatar } from "antd";
import { raleway } from "@/lib/fonts";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckSquareOutlined, EditOutlined } from "@ant-design/icons";

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

  const [profileData, setProfileData] = useState<ProfileFormValues>({
    firstname: "Alfred",
    lastname: "Wanjau",
    email: 'markzuck@gmail.com',
    phone: '+327 555 1289',
    title: 'Founder',
    city: "Kigali, Rwanda",
  });

  const [addressData, setAddressData] = useState<AddressFormValues>({
    country: "USA",
    city: "Palo Alto, California",
    zipcode: "86724"
  })


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleAddressEdit = () => {
    setIsAddressEdit(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
    form.reset(profileData); // Reset form values to the original data
  };

  const handleAddressCancel = () => {
    setIsAddressEdit(false);
    form.reset(addressData);
  }



  // 1. Define your form.
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      city: ""
    },
  });

  const formAddress = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: "",
      city: "",
      zipcode: ""
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
    setProfileData(data); // Update the profile data with the form values
    setIsEditing(false); // Exit editing mode
    // Optional: Show a success message or perform other actions
    message.success("Profile updated successfully")
  };

  const handleSaveAddress = (data: AddressFormValues) => {
    setAddressData(data);
    setIsAddressEdit(false)
    message.success("Address updated successfully.")
  }

  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid">
        <Avatar size={60} />
        <div className={`${raleway.className} mt-3`}>
          <p className="text-auth-text-color font-semibold text-lg">Alfred Wanjau</p>
          <p className="text-[#949494] font-semibold text-[15px]">Creator</p>
          <p className="text-[#949494] font-semibold text-[14px]">Kigali, Rwanda</p>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
        <p className="text-auth-text-color font-semibold text-[20px]">Personal Information</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)} className="space-y-8">
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
                    <p className="text-auth-text-color text-base font-semibold">{profileData.firstname}</p>
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
                    <p className="text-auth-text-color text-base font-semibold">{profileData.lastname}</p>
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
                    <p className="text-auth-text-color text-base font-semibold">{profileData.email}</p>
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
                    <p className="text-auth-text-color text-base font-semibold">{profileData.phone}</p>
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
                    <p className="text-auth-text-color text-base font-semibold">{profileData.title}</p>
                  )}
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {
              isEditing ? (
                <>
                  <Button type="submit" className="bg-[#004A39] text-[#BBFB00]">
                    Save Changes <CheckSquareOutlined className="ml-1"/>
                  </Button>
                  <Button style={{ marginLeft: "10px" }} onClick={handleCancel} className="bg-[#004A39] text-[#BBFB00]">
                    Cancel
                  </Button>
                </>
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
        <p className="text-auth-text-color font-semibold text-xl">Address</p>
        <form onSubmit={formAddress.handleSubmit(handleSaveAddress)} className="space-y-8">
          <Form {...formAddress}>
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
                    <p className="text-auth-text-color text-base font-semibold">{addressData.country}</p>
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
                    <p className="text-auth-text-color text-base font-semibold">{addressData.city}</p>
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
                    <p className="text-auth-text-color text-base font-semibold">{addressData.zipcode}</p>
                  )}
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {
              isAddressEdit ? (
                <>
                  <Button type="submit" className="bg-[#004A39] text-[#BBFB00]">
                    Save Changes <CheckSquareOutlined className="ml-1"/>
                  </Button>
                  <Button style={{ marginLeft: "10px" }} onClick={handleAddressCancel} className="bg-[#004A39] text-[#BBFB00]">
                    Cancel
                  </Button>
                </>
              ) : (
                  <Button type="submit" onClick={handleAddressEdit}
                    className="bg-transparent text-[#929292] border-solid border-[#929292] rounded-sm border-[1px] flex items-center gap-2">
                    Edit <EditOutlined className="text-[#929292] "/>
                  </Button>
              )
            }
          </Form>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
