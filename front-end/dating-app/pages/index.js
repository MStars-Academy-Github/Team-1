import React from "react";
import Head from "next/head";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InterestsIcon from "@mui/icons-material/Interests";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-200">
      <Head>
        <title>Create next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="row">
          <div>
            <FavoriteIcon className="ico" />
            <FavoriteBorderIcon className="ico" />
            <InterestsIcon className="ico" />
            <LoyaltyIcon className="ico" />
            <ManIcon className="ico" />
            <Diversity1Icon className="ico" />
            <WomanIcon className="ico" />
            <MonitorHeartIcon className="ico" />
            <Diversity2Icon className="ico" />
            <VolunteerActivismIcon className="ico" />
            <FmdGoodIcon className="ico" />
            <ThumbUpOffAltIcon className="ico" />
            <MaleIcon className="ico" />
            <FemaleIcon className="ico" />
          </div>
          <div>
            <FavoriteIcon className="ico" />
            <FavoriteBorderIcon className="ico" />
            <InterestsIcon className="ico" />
            <LoyaltyIcon className="ico" />
            <ManIcon className="ico" />
            <Diversity1Icon className="ico" />
            <WomanIcon className="ico" />
            <MonitorHeartIcon className="ico" />
            <Diversity2Icon className="ico" />
            <VolunteerActivismIcon className="ico" />
            <FmdGoodIcon className="ico" />
            <ThumbUpOffAltIcon className="ico" />
            <MaleIcon className="ico" />
            <FemaleIcon className="ico" />
          </div>
        </div>
      </section>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-red-100 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5">
            <div className="py-10">
              <h2 className="text-1xl font-bold text-gray-700">
                Sign in to meet your lover
              </h2>

              <div className="border-2 w-10 border-pink-300 inline-block mt-10"></div>
              <div className="flex flex-col items-center mt-10">
                <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-3">
                  <EmailIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="email"
                    name="email"
                    placeholder="Write your Email here!"
                  />
                </div>
                <div className="bg-yellow-200 h-10 w-80 p-2 mt-5 flex items-center rounded-2xl">
                  <LockIcon className="text-white mr-3" />
                  <input
                    className="bg-white outline-none rounded-2xl w-80 pl-2"
                    type="password"
                    name="password"
                    placeholder="Insert your password here!"
                  />
                </div>
                <div className="flex mt-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="/main"
                    className="border-2 border-pink-200 bg-pink-200 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-pink-200 mt-10"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Sign in section  */}
          <div className="w-2/5 bg-pink-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hey, cutie!</h2>
            <div className="border-2 w-40 border-pink-400 inline-block mb-2"></div>
            <p className="mb-10">Come here and meet some girls and boys</p>
            <a
              href="/register"
              className="border-2 border-pink-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-pink-300"
            >
              Sign up
            </a>
          </div>
          {/* Log in section  */}
        </div>
      </main>
    </div>
  );
}
