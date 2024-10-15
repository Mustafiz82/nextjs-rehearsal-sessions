import Image from "next/image";
import React from "react";

const SponosrCategory = ({ categoryName }) => {
  return (
    <div>
      <h1 className="text-center my-2 text-md 2xl:text-xl">{categoryName}</h1>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
        <div className="bg-[#F8F7FA] border w-full md:max-w-fit   p-2 px-8">
          <div className=" flex items-center  h-full  gap-2 ">
            <Image
              src="/images/orbit.png"
              className="bg-white  px-5 py-2"
              width={75}
              height={75}
            ></Image>
            <h1 className="text-md 2xl:text-xl">Datalink Limited</h1>
          </div>
        </div>
        <div className="bg-[#F8F7FA] border  w-full md:max-w-fit p-2 px-8">
          <div className=" flex items-center  h-full  gap-2 ">
            <Image
              src="/images/orbit.png"
              className="bg-white  px-5 py-2"
              width={75}
              height={75}
            ></Image>
            <h1 className="text-md 2xl:text-xl">Datalink Limited</h1>
          </div>
        </div>
        <div className="bg-[#F8F7FA] border  w-full md:max-w-fit p-2 px-8 ">
          <div className=" flex items-center  h-full  gap-2 ">
            <Image
              src="/images/orbit.png"
              className="bg-white  px-5 py-2"
              width={75}
              height={75}
            ></Image>
            <h1 className="text-md 2xl:text-xl">Datalink Limited</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponosrCategory;
