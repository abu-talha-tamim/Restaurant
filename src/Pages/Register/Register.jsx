import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../componemts/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setServerError(null); // Reset previous errors

    try {
      const result = await createUser(data.email, data.password);
      console.log("User registered:", result.user);

      // Update the user profile with name and photo URL
      await updateUserProfile(data.name, data.photoURL);

      // Reset form fields
      const userInfo = {
        name: data.name,
        email: data.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          // Redirect user after successful registration
          navigate("/");
        }
      });
      reset();
      // create user entry in the database

      // Show success alert
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setServerError("This email is already registered. Try logging in.");
      } else {
        setServerError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Register</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white w-full max-w-md shadow-2xl p-6 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
            Register
          </h1>

          {serverError && (
            <p className="text-red-600 text-center">{serverError}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">Photo URL</label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Enter your photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must not exceed 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must contain uppercase, lowercase, a number, and a
                  special character
                </p>
              )}
            </div>

            <div className="form-control mt-4">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>
              <SocialLogin/>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
