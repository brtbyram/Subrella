"use client";

import { useDispatch } from "react-redux";
import { openModal } from "@/redux/appSlice";
import SubscriptionsTable from "../../components/table/Table";
import clsx from "clsx";

// const subscriptions = [
//   {
//     id: 1,
//     name: "Netflix",
//     plan: "Standart",
//     cost: 45,
//     nextPayment: "2023-07-15",
//     status: "Aktif",
//   },
//   {
//     id: 2,
//     name: "Spotify",
//     plan: "Bireysel",
//     cost: 30,
//     nextPayment: "2023-07-01",
//     status: "Aktif",
//   },
//   {
//     id: 3,
//     name: "YouTube Premium",
//     plan: "Aile",
//     cost: 25,
//     nextPayment: "2023-07-10",
//     status: "Aktif",
//   },
//   {
//     id: 4,
//     name: "Amazon Prime",
//     plan: "Yıllık",
//     cost: 20,
//     nextPayment: "2023-12-01",
//     status: "Aktif",
//   },
//   {
//     id: 5,
//     name: "Apple iCloud",
//     plan: "50GB",
//     cost: 10,
//     nextPayment: "2023-07-05",
//     status: "Aktif",
//   },
// ];

export default function SubscriptionsPage() {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 pb-10 space-y-10">
      <div className="flex border rounded-2xl bg-gray-800 items-center justify-between px-14 py-12 min-h-max">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            Check out popular subscriptions that users are using
          </h1>
          <p className="text-gray-300">
            You can add your own subscriptions to the list.
          </p>
          <button className="bg-blue-500 text-white font-semibold text-lg px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Get All
          </button>
        </div>
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
          className=" flex justify-center items-center p-3"
        >
          {["1", "2", "3", "4", "5"].map((item) => (
            <div
              className={clsx(
                "border rounded-full -mx-3  flex items-center justify-center",
                item === "1"
                  ? "z-10 h-20 w-20 bg-gray-300 opacity-35"
                  : item === "2"
                  ? "z-20 h-24 w-24 bg-gray-200"
                  : item === "3"
                  ? "z-30 h-28 w-28 bg-white "
                  : item === "4"
                  ? " z-20 h-24 w-24 bg-gray-200"
                  : item === "5"
                  ? "z-10 h-20 w-20 bg-gray-300 opacity-35"
                  : ""
              )}
            >
              <h2 className="text-2xl font-semibold ">{item}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 md:flex-row max-md:text-center">
        <div className="space-y-2 p-0 pb-3 flex-1">
          <h1 className="text-4xl font-semibold">Subscriptions</h1>
        </div>
        <button className=" px-6 py-3 rounded-xl min-w-min border">
          Export
        </button>
        <button className=" px-6 py-3 rounded-xl min-w-min border">
          More Actions
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition duration-200 min-w-min"
          onClick={() =>
            dispatch(
              openModal({
                content: "AddSubModal",
                isOpen: true,
              })
            )
          }
        >
          Add Subscription
        </button>
      </div>
      <div className="border rounded-2xl flex items-center">
        <div className="text-2xl border-r p-10">April</div>
        <div className="grid grid-cols-5 place-content-center font-semibold w-full">
          <div className="p-4">
            <h1 className="text-gray-500">Total Subscription</h1>
            <h1 className="text-2xl ">5</h1>
          </div>
          <div className="border-l p-4 ">
            <h1 className="text-gray-500">Total Cost</h1>
            <h1 className="text-2xl">100$</h1>
          </div>
          <div className="border-l p-4">
            <h1 className="text-gray-500">Total Active</h1>           
            <h1 className="text-2xl ">5</h1>
          </div>
          <div className="border-l p-4">
            <h1 className="text-gray-500">Total Inactive</h1>
            <h1 className="text-2xl">0</h1>
          </div>
          <div className="border-l p-4">
            <h1 className="text-gray-500">Total Cancelled</h1>
            <h1 className="text-2xl">0</h1>
          </div>
        </div>
      </div>
      <div>
        <SubscriptionsTable />
      </div>
    </div>
  );
}
