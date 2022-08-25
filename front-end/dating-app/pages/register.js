import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WcIcon from "@mui/icons-material/Wc";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import axios from "axios";
export default function register() {
  const submit = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const phoneNumber = e.target[3].value;
    const birthday = e.target[4].value;
    const sex = e.target[5].value;
    const password = e.target[6].value;
    const confirmPassword = e.target[7].value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(birthday);
    console.log(sex);
    console.log(password);
    console.log(confirmPassword);
    axios
      .post("http://localhost:4000/users/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        birthday: birthday,
        sex: sex,
        birthday: birthday,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex items-center justify-center min-h-screen  bg-red-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-red-100 rounded-2xl shadow-2xl flex w-1/2 max-w-2xl">
          <div className="w-full">
            <form onSubmit={submit}>
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
                      name="firstName"
                      placeholder="Write your First Name"
                    />
                  </div>
                  <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-10">
                    <DriveFileRenameOutlineIcon className="text-white mr-3" />
                    <input
                      className="bg-white outline-none rounded-2xl w-80 pl-2"
                      type="name"
                      name="lastName"
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
                      name="phoneNumber"
                      placeholder="Insert your phone number"
                    />
                  </div>
                  <div className="bg-yellow-200  w-80 p-2 flex items-center rounded-2xl mb-10">
                    <AccountCircleIcon className="text-white mr-3" />
                    <input
                      className="bg-white outline-none rounded-2xl w-80 pl-2"
                      type="number"
                      name="birthday"
                      placeholder="Insert your age"
                    />
                  </div>
                  <div className="bg-yellow-200 h-10 w-40 p-2 mt-5 flex items-center rounded-2xl">
                    <WcIcon className="text-white" />
                    <select
                      className="text-gray mr-3 pl-10 items-center rounded-2xl"
                      id="grid-state"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <div className="bg-white outline-none rounded-2xl w-80 pl-2"></div>
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
                      name="confirmPassword"
                      placeholder="repeat password again"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="border-2 border-pink-200 bg-pink-200 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-pink-200 mt-10"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
