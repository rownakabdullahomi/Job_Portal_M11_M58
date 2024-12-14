import { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mx-8 mb-8">
        <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-primary w-full"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
