import React from "react";
import Card from "./Card";
import { HiSpeakerphone } from "react-icons/hi";
import { FaMicrophone } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
import { IoBagAddSharp } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";

const Cardcontainer = () => {
  const mytitle = [
    {
      title: "Marketing drives brand awareness, engages customers, boosts sales, and builds loyalty.",
      heading: "Marketing",
      icon: <HiSpeakerphone size={30} />,
    },
    {
      title: "Sales convert leads into customers, drive revenue, build relationships, and ensure growth.",
      heading: "Sales",
      icon: <FaMicrophone size={30} />,
    },
    {
      title: "Business strategies optimize operations, improve efficiency, and drive profitability.",
      heading: "Business",
      icon: <BsGraphUpArrow size={30} />,
    },
    {
      title: "Technology transforms industries, enhances productivity, and fosters innovation.",
      heading: "Technology",
      icon: <RiComputerFill size={30} />,
    },
    {
      title: "E-commerce expands reach, streamlines transactions, and enhances customer experience.",
      heading: "E-commerce",
      icon: <IoBagAddSharp size={30} />,
    },
    {
      title: "Digital marketing boosts visibility, engagement, and brand recognition.",
      heading: "Digital Marketing",
      icon: <SiGooglemarketingplatform size={30} />,
    },
  ];

  return (
    <div className="bg-black  w-full  flex flex-wrap gap-5 py-4 min-h-[70vh]  ">
      {mytitle.map((item, index) => (
        <Card key={index} icon={item.icon} title={item} />
      ))}
    </div>
  );
};

export default Cardcontainer;
