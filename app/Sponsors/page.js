import React from "react";
import SponosrCategory from "../Components/SponosrCategory";

const page = () => {
  return (
    <div className="m-5">
      <div className="border gap-10 md:gap-5 flex flex-col md:flex-row justify-between p-5">
        <h1 className="flex-1 text-xl 2xl:text-2xl font-medium ">
          sponsors page
        </h1>{" "}
        <div className="flex flex-col lg:flex-row gap-2 md:gap-10">
          <button className="bg-primary-400 hover:bg-primary-300 rounded-md px-6 py-2 text-white">
            Add to my website
          </button>
          <button className="text-primary-400 border-2 border-primary-400 rounded-md px-6 py-2 ">
            Fullscreen preview
          </button>
        </div>
      </div>

      <h1 className="text-2xl lg:text-5xl text-center my-14 font-semibold">
        OUR SPONSORS{" "}
      </h1>
      <div className="max-w-[1000px] space-y-8 mx-auto">
        <SponosrCategory categoryName="Platinum"></SponosrCategory>
        <SponosrCategory categoryName="Bronze"></SponosrCategory>
        <SponosrCategory categoryName="Gold"></SponosrCategory>
        <SponosrCategory categoryName="Silver"></SponosrCategory>
      </div>
    </div>
  );
};

export default page;
