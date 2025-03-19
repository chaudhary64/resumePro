import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../services/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const userSession = await authService.login({
        email: data.email,
        password: data.password,
      });
      console.log("Login successful:", userSession);
      setErrorMessage(""); // Clear any previous errors
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.message || "An error occurred during login.");
    }
  };

  return (
    <div className="flex h-screen w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: "Email is required" })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: "Password is required" })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? {" "}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
