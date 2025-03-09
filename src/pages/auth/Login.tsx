import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice.js";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useLogin } from "../../services/auth.js";
import AuthBanner from "./AuthBanner.js";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunludur"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre zorunludur"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useLogin();
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const { token, name, userId, email } = await login.mutateAsync(values);
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      dispatch(setCredentials({ user: { name, userId, email } }));
      navigate("/");
    } catch (error) {
      console.error("Kayıt sırasında bir hata oluştu", error);
    }
  };

  return (
    <div className="max-h-screen overflow-hidden relative">
      <Link
        translate="no"
        className="absolute top-10 left-12 text-4xl md:text-5xl font-poppins font-extrabold text-[#112d5d] lg:text-white z-20"
        to="/"
      >
        Subrella
      </Link>
      <div className="flex w-screen h-screen">
        {/* Görsel */}
        <AuthBanner />
        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="lg:basis-1/2 w-full flex flex-col items-center justify-center"
        >
          <Link to="/">
            <img
              className="h-16 rounded-full border-gray-200 bg-gray-100 p-3"
              src="/public/logo-kısa.svg"
            />
          </Link>
          <div className="pt-2 w-10/12 max-w-[500px]">
            <h2 className="text-3xl font-bold text-center mb-6">
              Hello Again!
            </h2>
            <p className="text-center">
              Thank you for get back to Subrella, lets access our the best
              recommendation contact for you{" "}
            </p>
            <div className="text-center space-y-4 mt-4">
              <div className="mt-6 grid grid-cols-2 gap-2 bg-white text-black">
                <Button variant="socialLogin">
                  <img
                    className="h-6"
                    src="https://www.google.com/favicon.ico"
                    alt="google logo"
                  />
                  <span>Google</span>
                </Button>
                <Button variant="socialLogin">
                  <img
                    className="h-7"
                    src="https://www.apple.com/favicon.ico"
                    alt="facebook logo"
                  />
                  <span>Apple</span>
                </Button>
              </div>
            </div>

            <div className="relative border-b border-[##e8e9ea] ring-1 ring-[##e8e9ea] h-[1px] mt-7">
              <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-2 text-[#909398] text-sm font-inter">
                Or continue with
              </span>
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4 mt-6">
                  {/* Email */}
                  <div className="space-y-1">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-400"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        as={Input}
                        className={`pl-10 pr-4 w-full h-10 border-1 border-[#ADC2CD] ring-1 ring-[#ADC2CD] rounded-md focus:ring-2${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-[#475569]"
                        }`}
                      />
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-400 text-sm"
                    />
                  </div>

                  {/* Password*/}
                  <div className="space-y-1">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-400"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        as={Input}
                        className={`pl-10 pr-4 w-full h-10 border-1 border-[#ADC2CD] ring-1 ring-[#ADC2CD] rounded-md focus:ring-2 ${
                          errors.password && touched.password
                            ? "border-red-500"
                            : "border-[#475569]"
                        }`}
                      />
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-400 text-sm"
                    />
                  </div>

                  {/* Giriş Yap Butonu */}
                  <Button
                    type="submit"
                    className="w-full h-11 bg-[#112d5d] text-white py-3 text-base rounded-md hover:from-[#2563EB] hover:to-[#3B82F6] flex items-center justify-center group"
                  >
                    <span>Sign In</span>
                    <ArrowRight
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                      size={20}
                    />
                  </Button>
                </Form>
              )}
            </Formik>

            {/*hatırlama & Şifremi Unuttum Linki */}
            <div className="mt-6   flex justify-between items-center">
              <div className="flex items-center text-[#909398] font-light">
                <input className="w-4 h-4" type="checkbox" id="remember" />
                <label htmlFor="remember" className="ml-1.5">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="font-normal text-[#112d5d] hover:text-[#3B82F6]"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Giriş Yap Linki */}
            <div className="mt-6 text-center text-gray-400">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="font-medium text-[#60A5FA] hover:text-[#3B82F6]"
              >
                Join Subrella now!
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
