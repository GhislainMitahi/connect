import {
  AudioOutlined,
  CopyOutlined,
  EllipsisOutlined,
  PaperClipOutlined,
  PictureOutlined,
  SendOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormSchemaChat } from "@/lib/zodSchema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const VisionUserChat = () => {
  const form = useForm<z.infer<typeof FormSchemaChat>>({
    resolver: zodResolver(FormSchemaChat),
  });

  function onSubmit(data: z.infer<typeof FormSchemaChat>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="bg-sidebarcolor min-h-52 rounded-lg p-4 md:w-[80%]">
        <div className="flex gap-4">
          <div className="h-[60px] w-[60px]">
            <Image
              src="/alyprofile.png"
              width={100}
              height={100}
              alt="Aly profile pucture"
            />
          </div>
          <div className="flex gap-2">
            <div>
              <p className="text-auth-text-color font-bold text-[13px] ">
                VISION
              </p>
              {/* <small>Today 2:45 PM</small> */}
              <p>Thank you your instagram is connected now</p>
              <p>Analyzing ...</p>
              <p>
                Analysis completed! Here's an overview of your recent
                performance:
              </p>
              <ul>
                <li>Engagment rate : 4.5%</li>
                <li>
                  Top performaing Post : Your recent travel blog with 1200 likes
                  and 300 comments
                </li>
                <li>
                  Audience Demographics: Predominantly aged 18-24 with a strong
                  following from New York and Los Angeles
                </li>
              </ul>
              <div className="flex mt-4 gap-4">
                <CopyOutlined />
                <SyncOutlined />
                <EllipsisOutlined rotate={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg flex items-center p-4 md:w-[80%]">
        <div className="flex gap-4">
          <div className="h-[60px] w-[60px]">
            <Image
              src="/useronchat.png"
              width={100}
              height={100}
              alt="Aly profile pucture"
            />
          </div>
          <div className="flex gap-2">
            <div>
              <p className="text-auth-text-color font-bold text-[13px] ">
                Alfred Wandjau
              </p>
              <p>That's helpful. What can I do to improve my engagment?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sidebarcolor min-h-52 rounded-lg p-4 md:w-[80%]">
        <div className="flex gap-4">
          <div className="h-[60px] w-[60px]">
            <Image
              src="/alyprofile.png"
              width={100}
              height={100}
              alt="Aly profile pucture"
            />
          </div>
          <div className="flex gap-2">
            <div>
              <p className="text-auth-text-color font-bold text-[13px] ">
                VISION
              </p>
              {/* <small>Today 2:45 PM</small> */}
              <p>Thank you your instagram is connected now</p>
              <p>Analyzing ...</p>
              <p>
                Analysis completed! Here's an overview of your recent
                performance:
              </p>
              <ul>
                <li>Engagment rate : 4.5%</li>
                <li>
                  Top performaing Post : Your recent travel blog with 1200 likes
                  and 300 comments
                </li>
                <li>
                  Audience Demographics: Predominantly aged 18-24 with a strong
                  following from New York and Los Angeles
                </li>
              </ul>
              <div className="flex mt-4 gap-4">
                <CopyOutlined />
                <SyncOutlined />
                <EllipsisOutlined rotate={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border flex flex-col justify-between border-linkColor min-h-24 w-full rounded-xl p-3 mt-10 md:w-[80%]"
        >
          <p className="text-auth-text-color text-sm ">Message VISION</p>
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none focus:outline-none focus:ring-0 focus:border-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-opacity-25 min-h-24 bg-custom-green-standard w-full my-1 text-custom-green-night placeholder:text-custom-green-night"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center justify-around gap-2">
              <PaperClipOutlined className="text-lg" />
              <PictureOutlined className="text-lg" />
              <AudioOutlined className="text-lg" />
            </div>
            <Button
              type="submit"
              className=" hover:bg-auth-text-color bg-auth-text-color py-1 px-4 text-white rounded-lg"
            >
              <SendOutlined rotate={-45} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VisionUserChat;
