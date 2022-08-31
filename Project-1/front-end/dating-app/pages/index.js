import React from "react";
import Head from "next/head";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import dotenv from "dotenv";
import useSWR from "swr";

export default function Index() {
  dotenv.config();
  const router = useRouter();
  const submitLogin = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email);
    console.log(password);

    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/users/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          router.push("/main");
        }
      })
      .catch((error) =>
        console.log(alert(`Hey pal, email or password wrong.`))
      );
  };
  return (
    <form onSubmit={submitLogin}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-400">
        <Head>
          <title>Create next app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="side-left rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5">
              <div className="py-10">
                <h2 className="text-1xl font-bold text-gray-700">
                  Sign in to meet your lover
                </h2>

                <div className="border-2 w-10 border-pink-300 inline-block mt-10"></div>
                <div className="flex flex-col items-center mt-10">
                  <div className="bg-gradient-to-r from-cyan-200 to-blue-300  w-80 p-2 flex items-center rounded-2xl mb-3">
                    <EmailIcon className="text-white mr-3" />
                    <input
                      className="bg-white outline-none rounded-2xl w-80 pl-2"
                      type="email"
                      name="email"
                      placeholder="Write your Email here!"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-cyan-200 to-blue-300 h-10 w-80 p-2 mt-5 flex items-center rounded-2xl">
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
                    <button
                      type="submit"
                      className="border-2 border-pink-200 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-gradient-to-r from-pink-300 to-blue-300 hover:text-pink-500 mt-10"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Sign in section  */}
            <div className="side-right w-2/5 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2 text-indigo-400">
                Hey, cutie!
              </h2>
              <div className="border-2 w-40 border-pink-400 inline-block mb-2"></div>
              <p className="mb-10 text-black">
                Come here and meet some girls and boys
              </p>
              <Link
                href="/register"
                className="border-2 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-gradient-to-r from-pink-300 to-blue-300 hover:text-pink-500"
              >
                Sign up
              </Link>
            </div>
            {/* Log in section  */}
          </div>
        </main>
      </div>
    </form>
  );
}
