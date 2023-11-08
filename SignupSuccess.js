import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div>
        <br></br>
      <h1>Account created Successfully</h1>
      Redirecting to login page.......
    </div>
  );
};

export default SignupSuccess;
