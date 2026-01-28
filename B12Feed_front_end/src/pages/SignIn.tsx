import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const brandColor = "#058177";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      
      
      
        <Logo />
  

      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-3">
          <h1 className="text-3xl font-bold text-neutral-800 tracking-tight">
            Welcome back
          </h1>
          
          {/* Subtitle */}
          <p className="text-neutral-500 mt-3 font-medium">
            Helping good food reach the right hands.
          </p>
        </div>

        {/* Form Section */}
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/discover");
          }}
        >
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-700 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="name@organization.com"
              className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-200 outline-none focus:ring-2 focus:ring-[#3A5A58]/20 focus:border-[#3A5A58] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-700 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-200 outline-none focus:ring-2 focus:ring-[#3A5A58]/20 focus:border-[#3A5A58] transition-all"
            />
          </div>

          <Button
            type="submit"
            className="w-full text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#3A5A58]/20 hover:scale-[1.01] active:scale-[0.99] transition-all mt-4"
          >
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-8">
          New to B12Feed?{" "}
            <span
          onClick={() => navigate("/signup")}
          style={{ color: brandColor }}
          className="font-bold cursor-pointer hover:underline"
        >
          Create Account
        </span>

        </p>
      </div>
    </div>
  );
};

export default SignIn;