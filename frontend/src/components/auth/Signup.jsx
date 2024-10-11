import React,{useState} from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>
          <div className="my-2 flex flex-col">
            <Label className="font-bold">Full Name</Label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Nitish"
            />
          </div>
          <div className="my-2 flex flex-col">
            <Label className="font-bold">Email</Label>
            <input
              type="email"
              placeholder="nitish@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2 flex flex-col">
            <Label className="font-bold">Phone Number</Label>
            <input
              type="number"
              placeholder="1234567890"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2 flex flex-col">
            <Label className="font-bold">Password</Label>
            <input
              type="password"
              placeholder="abc@123"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
          <span className="text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
