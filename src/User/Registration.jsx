import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // Add this import if you're using react-router
import { IoHomeOutline } from "react-icons/io5"; // Make sure to import IoHomeOutline
import { FaEyeSlash, FaRegEye, FaGithub } from "react-icons/fa"; // Import necessary icons
import { useState } from "react";
import bg from "../assets/images/register-bg.jpg";
import { useForm } from "react-hook-form"; // Assuming you're using react-hook-form

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => {
  //     // Handle form submission
  //     console.log(data);
  //   };

  //   const handleSocialLogin = (providerSignIn) => {
  //     // Handle social login
  //     providerSignIn();
  //   };

  return (
    <div className="relative w-screen h-screen">
      <Helmet>
        <title>Fresh Mart | Register</title>
      </Helmet>

      {/* Background Image with More Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 z-0"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      {/* Back to Home Button with Margin from the Top */}
      <div className="absolute top-8 left-8 z-20">
        <Link to="/">
          <button className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-6 py-2">
            <IoHomeOutline className="text-2xl text-white" />
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center h-full z-10">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-opacity-90 p-8 rounded-lg">
          <form
            //   onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input bg-transparent border-b border-gray-400 text-white placeholder-gray-400 w-full py-2 focus:outline-none"
                // {...register("email", { required: true })}
              />
              {/* {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )} */}
            </div>

            <div className="relative form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input bg-transparent border-b border-gray-400 text-white placeholder-gray-400 w-full py-2 focus:outline-none"
                // {...register("password", { required: true })}
              />
              {/* {errors.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )} */}
              <span
                className="absolute top-12 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            <div className="form-control mt-4">
              <button className="relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                <span className="absolute inset-0 bg-[#6BB252] translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 text-black group-hover:text-black">
                  Login
                </span>
              </button>
            </div>

            <div className="divider text-white">OR</div>

            <div className="flex-col space-y-3">
              <button
                type="button"
                // onClick={() => handleSocialLogin(() => console.log("Google SignIn"))} // Replace with actual Google SignIn function
                className="w-full bg-white flex items-center text-gray-700 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
              >
                <svg
                  className="w-5 h-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3033_94454)">
                    {/* Google SVG paths here */}
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94454">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Sign in with Google</span>
              </button>

              <button
                // onClick={() => handleSocialLogin(() => console.log("GitHub SignIn"))} // Replace with actual GitHub SignIn function
                className="bg-black w-full rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5"
              >
                <FaGithub className="text-2xl" />
                <span>Sign in with GitHub</span>
              </button>
            </div>

            <div className="text-center mt-4">
              <span>
                Don't have an account?{" "}
                <Link className="font-bold text-orange-400" to="/register">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
