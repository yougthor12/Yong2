import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className='flex flex-col  justify-between text-center w-full p-2 '>
      <div className='text-red-200 text-[5rem]'>
        <h1> Hiiii </h1>
        <h1> kong </h1>
      </div>
      <div className='text-blue-400 text-[5rem]'>
        <h1> Hello </h1>
      </div>
      <div className='text-blue-400 text-[5rem]'>
        <h1> Hello </h1>
      </div>
      <div className='text-blue-400 text-[5rem]'>
        <h1> Hello </h1>
      </div>
      <div className='text-blue-400 text-[5rem]'>
        <h1> yong </h1>
      </div>
</div>

    // <div className="flex justify-center items-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-28 w-96 shadow-2xl">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
    //   >
    //     <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
    //       Welcome Back!
    //     </h2>

    //     <div className="mb-4">
    //       <label
    //         className="block text-lg font-medium text-gray-700 mb-2"
    //         htmlFor="email"
    //       >
    //         Email Address
    //       </label>
    //       <input
    //         className="w-full p-4 border-2 border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
    //         id="email"
    //         type="email"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label
    //         className="block text-lg font-medium text-gray-700 mb-2"
    //         htmlFor="password"
    //       >
    //         Password
    //       </label>
    //       <input
    //         className="w-full p-4 border-2 border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
    //         id="password"
    //         type="password"
    //         placeholder="Enter your password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>

    //     <div className="flex items-center justify-between mb-4">
    //       <button
    //         className=" w-70 bg-pink-500 transition-all duration-500 hover:bg-red-600 text-white font-bold py-3 px-14 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 hover:shadow-lg"
    //         type="submit"
    //       >
    //         Sign In
    //       </button>
    //       <div>
    //         <a
    //           className="text-sm text-pink-500 hover:text-pink-600 font-medium"
    //           href="#"
    //         >
    //           Forgot Password?
    //         </a>
    //       </div>
    //     </div>

    //     <div className="text-center">
    //       <p className="text-sm text-gray-600">Don't have an account?</p>
    //       <a
    //         href="#"
    //         className="text-pink-500 hover:text-pink-600 font-semibold"
    //       >
    //         Create one now
    //       </a>
    //     </div>
    //   </form>
    // </div>
  );
};

export default LoginForm;
