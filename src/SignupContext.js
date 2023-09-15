import { createContext, useContext, useState } from "react";

const SignupContext = createContext();

export const useSignupContext = () => {
  return useContext(SignupContext);
};

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};
