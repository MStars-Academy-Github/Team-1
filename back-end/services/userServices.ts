import Users from "../model/users";
async function findUserByEmail(email: String) {
  return await Users.find({ email });
}
async function findAllUsers() {
  return await Users.find({});
}

async function registerUser(
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  birthday: String,
  sex: String,
  encryptedPassword: String
) {
  return await Users.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    birthday,
    sex,
    password: encryptedPassword,
  });
}

export { findUserByEmail, findAllUsers, registerUser };
