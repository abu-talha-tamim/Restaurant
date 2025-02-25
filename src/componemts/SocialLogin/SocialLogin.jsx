import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log("Google Sign-in successful:", result.user);

      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      // Send user info to backend
      const res = await axiosPublic.post("/users", userInfo);
      console.log("User saved to DB:", res.data);

      navigate("/");
    } catch (error) {
      console.error("Google Sign-in Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300"
      >
        <FaGoogle className="text-lg" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
