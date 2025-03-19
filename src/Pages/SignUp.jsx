import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../services/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await authService.createAccount({
        email: data.email,
        password: data.password,
        name: data.username,
      });
      console.log("User registered successfully:", response);
      setErrorMessage(""); // Clear any previous errors
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
      console.error("Registration error:", error);
    }
  };

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome! Let's Begin
        </h2>
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
              className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", { required: "Please confirm your password" })}
              className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
