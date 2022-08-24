import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function main() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-red-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-red-100 rounded-2xl shadow-2xl flex w-1/2 max-w-2xl">
          <div className="w-full">
            <button className="mt-2 outline rounded-lg bg-pink-200 px-3">
              <a href="/">back to home</a>
            </button>
            <div className="py-10">
              <h2 className="text-1xl font-bold text-gray-700">
                Find your lover from here!
              </h2>

              <div className="border-2 w-10 border-pink-300 inline-block mt-10"></div>
              <div className="flex flex-col items-center mt-10">
                <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-3">
                  <DriveFileRenameOutlineIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="name"
                    name="name"
                    placeholder="Write your First Name"
                  />
                </div>
                <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-10">
                  <DriveFileRenameOutlineIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="name"
                    name="name"
                    placeholder="Write your Last Name"
                  />
                </div>
                <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-5">
                  <EmailIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="email"
                    name="email"
                    placeholder="Write your Email here!"
                  />
                </div>
                <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-5">
                  <LocalPhoneIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="number"
                    name="phone number"
                    placeholder="Insert your phone number"
                  />
                </div>
                <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-10">
                  <CalendarTodayIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="date"
                    name="date of birth"
                    placeholder="Insert your date of birth"
                  />
                </div>
                <div className="bg-yellow-200 h-10 w-80 p-2 mt-5 flex items-center rounded-2xl">
                  <LockIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="password"
                    name="password"
                    placeholder="create your password"
                  />
                </div>
                <div className="bg-yellow-200 h-10 w-80 p-2 mt-5 flex items-center rounded-2xl">
                  <LockIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="password"
                    name="password"
                    placeholder="repeat password again"
                  />
                </div>

                <div>
                  <a
                    href="#"
                    type="submit"
                    className="border-2 border-pink-200 bg-pink-200 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-pink-200 mt-10"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
