import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginLayout = () => {
  const { adminDefaultInfo, authenticated, setAuthenticated } =
    useContext(LoginContext);
  // const location = useLocation();
  const navigate = useNavigate();
  // const from = location?.state?.from?.pathname || "/";
  const handleAuthCheck = () => {
    // console.log(authenticated);
    setAuthenticated(!authenticated);
  };
  if (authenticated) {
    navigate("/");
  }
  const handleLoginValidation = (event) => {
    event.preventDefault();
    const email = event.target.emailContainer.value;
    const password = event.target.passwordContainer.value;
    if (adminDefaultInfo.mail === email && adminDefaultInfo.pass === password) {
      toast.success("Successfully Logged In!");
      setTimeout(() => setAuthenticated(!authenticated), 1000);
    }
  };
  return (
    <div className="bg-primary min-h-screen text-tColor flex flex-col justify-center items-center">
      <h3 className="my-5 text-[24px]  font-bold md:font-normal md:text-[36px] font-redHat drop-shadow-md text-hov uppercase brightness-150">
        React Chat UI Demo
      </h3>
      <div className="bg-hov p-5 rounded-lg w-[90%] md:w-[35%] ">
        <h2 className="text-center text-[18px] uppercase font-bold my-3">
          Sign in
        </h2>
        <form className="flex flex-col w-full" onSubmit={handleLoginValidation}>
          <div className="relative">
            <label htmlFor="emailContainer" className="absolute top-3 left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </label>
            <input
              title="Exp: abc@test.com"
              required
              type="email"
              id="emailContainer"
              placeholder="Enter Email"
              className="bg-primary mb-5 py-3 pl-10 rounded-lg outline-none w-full"
            />
          </div>
          {/* <h6 className="mb-5 text-[12px] my-2 text-center">
            
          </h6> */}
          <div className="relative">
            <label
              htmlFor="passwordContainer"
              className="absolute top-3 left-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </label>
            <input
              title="Exp Pass: 123456"
              required
              id="passwordContainer"
              type="password"
              placeholder="Enter Password"
              className="bg-primary mb-5 py-3 pl-10 rounded-lg outline-none w-full"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="bg-primary hover:bg-notification duration-200 cursor-pointer mb-5 py-3 pl-2 rounded-lg outline-none uppercase font-bold"
          />
        </form>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default LoginLayout;
