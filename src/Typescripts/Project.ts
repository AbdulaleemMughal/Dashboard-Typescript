import React, { ComponentType, SVGProps } from "react";
import { FcDocument } from "react-icons/fc";
import { MdCloudDownload } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { FcClock } from "react-icons/fc";

export interface ProjectResponse {
    id: number;
    title: string;
    description: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    time: string;
    task: string;
    styles: React.CSSProperties;
}

export let ProjectArr: ProjectResponse[] = [
    {
      id: 1,
      title: "Admin Dashboard Design",
      description: "Broadcast web app mockup.",
      icon: FcDocument, // Just assign the component reference
      time: "15 min ago",
      task: "30 Tasks",
      styles: {fontSize: '40px', backgroundColor: 'blue', padding: '5px'},
    },
    {
      id: 2,
      title: "WordPress Development",
      description: "Upload new design",
      icon: MdCloudDownload,
      time: "1 hour ago",
      task: "25 Tasks",
      styles: {fontSize: '40px', backgroundColor: 'green', padding: '5px', color: 'white'},
    },
    {
      id: 3,
      title: "Project Meeting",
      description: "New Project discussion",
      icon: FcClock,
      time: "35 min ago",
      task: "15 Tasks",
      styles: {fontSize: '40px', backgroundColor: 'blueviolet', padding: '5px'},
    },
    {
      id: 4,
      title: "Broadcast Mail",
      description: "Sent release detail to team.",
      icon: IoMdMailOpen,
      time: "55 min ago",
      task: "35 Tasks",
      styles: {fontSize: '40px', backgroundColor: 'red', padding: '5px', color: 'white'},
    },
    {
      id: 5,
      title: "UI design",
      description: "New application planning",
      icon: BiSolidCircleThreeQuarter,
      time: "50 min ago",
      task: "27 Tasks",
      styles: {fontSize: '40px', backgroundColor: 'orange', padding: '5px', color: 'white'},
    },
  ];
