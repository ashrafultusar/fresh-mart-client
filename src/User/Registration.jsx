import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // Add this import if you're using react-router
import { IoHomeOutline } from "react-icons/io5"; // Make sure to import IoHomeOutline
import { FaEyeSlash, FaRegEye, FaGithub } from "react-icons/fa"; // Import necessary icons
import { useState } from "react";
import bg from "../assets/images/register-bg.jpg";
import { useForm } from "react-hook-form"; // Assuming you're using react-hook-form
import { FaGoogle } from "react-icons/fa6";

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
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 z-0"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div> */}

      {/* Back to Home Button with Margin from the Top */}
      <div className="absolute top-8 left-8 z-20">
        <Link to="/">
          <button className="bg-[#6BB252] rounded-lg hover:bg-orange-400 duration-300 transition-colors border border-transparent px-6 py-2">
            <IoHomeOutline className="text-2xl text-white" />
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center h-full z-10">
        <div className="card shrink-0 w-full max-w-lg border bg-opacity-90 p-8 rounded-lg">
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
                className="input bg-transparent border-b border-gray-400 text-black placeholder-gray-400 w-full py-2 focus:outline-none"
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
                className="input bg-transparent border-b border-gray-400 text-black placeholder-gray-400 w-full py-2 focus:outline-none"
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
            <button className="w-full bg-[#6BB252] py-2 rounded-md hover:bg-orange-400 duration-300 transition-colors">
                Login
              </button>
            </div>

            <div className="divider text-white">OR</div>

            <div className="flex-col space-y-3">
              <div className="form-control mt-4">
                <button className="bg-[#6BB252] w-full py-2 rounded-md flex items-center justify-center  hover:bg-orange-400 duration-300 transition-colors">
                  <FaGoogle className="text-2xl" />
                </button>
              </div>
              <button className="bg-[#6BB252] w-full   flex items-center py-2 rounded-md justify-center hover:bg-orange-400 duration-300 transition-colors">
                <FaGithub className="text-2xl" />
              </button>
            </div>

            <div className="text-center mt-4">
              <span>
                Don't have an account?{" "}
                <Link className="font-bold text-orange-400" to="/login">
                  Login
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
