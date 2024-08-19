"use client"

import { Tooltip } from "antd";
import {  ArrowUpOutlined } from "@ant-design/icons";
// import GitHubCalendar from 'react-github-calendar';

import ActivityCalendar, { Activity } from "react-activity-calendar";

import FollowersIcon from "@/components/svg/follower";
import HandShake from "@/components/svg/handShake";
import ReachIcon from "@/components/svg/reach";

import { inter } from "@/lib/fonts";


const InstagramContent = () => {
  const data = [
    {
      date: "2021-02-20",
      count: 16,
      level: 3
    },
    {
      date: "2021-02-22",
      count: 13,
      level: 1
    },
    {
      date: "2021-02-26",
      count: 16,
      level: 4
    },
    {
      date: "2021-05-26",
      count: 16,
      level: 4
    },
    {
      date: "2022-02-21",
      count: 10,
      level: 2
    },
    // {
    //   date: "2023-02-21",
    //   count: 1,
    //   level: 1
    // }
  ];

  // type EventHandler = (event: React.SyntheticEvent) => (activity: Activity) => void;

  interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4
  }

  // @ts-nocheck
  const explicitTheme: any = {
    light: ['#EBEBEB', '#CAFFB8', '#84FF82', '#3DCE66', '#008F06'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  const showActivity = () => {
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  }

  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <div className="border-[#B5D2CC] rounded-md border-solid border-[2px] p-4 min-w-[300px]">
          <FollowersIcon />
          <h2 className="text-auth-text-color font-semibold text-base md:my-2 ">Followers</h2>
          <div className={`${inter.className}`}>
            <p className=" font-semibold text-auth-text-color">
              <span className="text-[32px]">42.87K</span>
              <span className="text-[#25CD25] text-xl ml-2"><ArrowUpOutlined rotate={30}/> 7%</span>
            </p>
            <p className="text-[#454545] text-sm">Overall in the last month</p>
          </div>
        </div>
        <div className="border-[#B5D2CC] rounded-md border-solid border-[2px] p-4 min-w-[300px]">
          <HandShake />
          <h2 className="text-auth-text-color font-semibold text-base md:my-2">Engagement Rate</h2>
          <div className={`${inter.className}`}>
            <p className=" font-semibold text-auth-text-color">
              <span className="text-[32px]">5%</span>
              <span className="text-[#25CD25] text-xl ml-2"><ArrowUpOutlined rotate={30}/> 2%</span>
            </p>
            <p className="text-[#454545] text-sm">Of the last 10 posts</p>
          </div>
        </div>
        <div className="border-[#B5D2CC] rounded-md border-solid border-[2px] p-4 min-w-[300px]">
          <ReachIcon />
          <h2 className="text-auth-text-color font-semibold text-base md:my-2">Reach </h2>
          <div className={`${inter.className}`}>
            <p className=" font-semibold text-auth-text-color">
              <span className="text-[32px]">15.05K</span>
              <span className="text-[#FF0000] text-xl ml-2"><ArrowUpOutlined rotate={120}/> 2%</span>
            </p>
            <p className="text-[#454545] text-sm">Of the last 10 posts</p>
          </div>
        </div>
      </div>
      <div className="w-[320px] md:w-full border-[#b5d2cc] rounded-md border-solid border-[2px] p-4">
        <ActivityCalendar
          data={data}
          colorScheme="light"
          theme={explicitTheme}
          renderBlock={(block, activity) => (
            <Tooltip
              title={`${activity.count} activities on ${activity.date}`}
              color="#008F06"
            >
              {block}
            </Tooltip>
          )}
        />
        {/* <GitHubCalendar
          username="christianbiring1"
          colorScheme="light"
        /> */}
      </div>
    </div>
  );
}
 
export default InstagramContent;
