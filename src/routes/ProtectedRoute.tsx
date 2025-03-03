import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard.js";

const ProtectedRoute = () => {
  if (localStorage.getItem("token")) {
    // Kullanıcı giriş yapmışsa, Welcome'ı göster
    return <Dashboard />;
  } else {
    // Kullanıcı giriş yapmamışsa, Home'u göster
    return <Home />;
  }
};

export default ProtectedRoute;
