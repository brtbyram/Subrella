import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom";
import Modal from "@/components/modals";

function RootLayout(): any {
  return (
    <div className="flex flex-col min-h-screen">
      <Modal />
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default RootLayout;
