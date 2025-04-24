import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Modal from "@/components/modals";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSelector } from "react-redux";

function RootLayout(): any {

  const { user} = useSelector((state: RootState) => state.auth);

  console.log(window.innerWidth)
  return (
    <div className="flex min-h-screen">
      <ScrollRestoration />
      {user && window.innerWidth > 500  ? <Sidebar/> : <Header/>}
      <main className="flex-1 pt-16">
        <Modal />
        <Outlet />
        {!user ? <Footer/> : null}
      </main>
    </div>
  );
}

export default RootLayout;
