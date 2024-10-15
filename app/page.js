import { tableData } from "@/public/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-5">
      <div className="flex border items-center  justify-between p-6">
        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">
          Rehearsal Sessions
        </h1>
      </div>

      <div className=" grid grid-cols-2   md:flex  justify-between items-center m-5 my-10">
        <div className="mb-5 col-span-2 text-center md:text-left md:mb-0">
          <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium">
            Total Track: 9
          </h1>
          <p
            style={{ lineHeight: "1" }}
            className="text-md text-black/70 my-1 leading-none md:text-lg 2xl:text-xl font-medium"
          >
            Only sessions with virtual <br />
            access included
          </p>
        </div>

        <div className="text-center mb-5 md:mb-0">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold">57</h1>
          <p className="text-md text-black/70 my-1 md:text-lg 2xl:text-xl font-medium">
            Session
          </p>
        </div>

        <div className="text-center mb-5 md:mb-0">
          <h1 className="text-xl lg:text-2xl text-green-500 2xl:text-3xl font-bold">
            1734
          </h1>
          <p className="text-md text-black/70 my-1 md:text-lg 2xl:text-xl font-medium">
            Total watched
          </p>
        </div>

        <div className="flex col-span-2 justify-center">
        <button className="btn btn-primary text-white border-none px-8 bg-primary-400">
          Export All
        </button>
        </div>
      </div>

      <div className="overflow-x-scroll ">
        <div className="grid min-w-[700px] lg:gap-10 pt-8  p-5 2xl:text-lg  font-medium grid-cols-7 ">
          <div className="col-span-2"> Session Name</div>
          <div> Date and Time</div>
          <div className="col-span-2 text-center">Watched</div>
          <div> Median Duration</div>
          <div> </div>
        </div>

        <div className="min-w-[700px] space-y-4">
          {tableData?.map((item, idx) => (
            <div
              key={idx}
              className="grid items-center text-lg 2xl:text-xl p-5 border  lg:gap-10  grid-cols-7 "
            >
              <div className="col-span-2"> {item?.sessionName}</div>
              <div> {item?.dateTime}</div>
              <div className="text-green-500 col-span-2 text-center">
                {item?.watched}
              </div>
              <div className=""> {item?.medianDuration}</div>
              <div>
                <button className="btn  bg-base-300 font-bold">
                  {" "}
                  {item?.action}{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
