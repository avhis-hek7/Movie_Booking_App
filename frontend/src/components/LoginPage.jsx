import React, { useState } from "react";
import { loginStyles } from "../assets/dummyStyles";
import { ToastContainer } from "react-toastify";
import { ArrowLeft, Film, LocateFixed } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className={loginStyles.pageContainer}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="relative w-full max-w-md z-10">
        <div className={loginStyles.backButtonContainer}>
          <button className={loginStyles.backButton} onClick={goBack}>
            <ArrowLeft size={20} className={loginStyles.backButtonIcon} />
            <span className={loginStyles.backButtonText}>Back to Home</span>
          </button>
        </div>

        <div className={loginStyles.cardContainer}>
            <div className={loginStyles.cardHeader}></div>
            <div className={loginStyles.cardContent}>
                <div className={loginStyles.headerContainer}>
                    <div className={loginStyles.headerIconContainer}>
                        <Film  className={loginStyles.headerIcon} size={28}/>
                        <h2 className={loginStyles.headerTitle}>CINEMA ACCESS</h2>

                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
