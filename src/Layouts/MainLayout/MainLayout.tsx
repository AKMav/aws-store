import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer } from "@/templates";
import { useCacheCart, useCacheWishlist } from "@/hooks";
import "./style.scss";

export const MainLayout = () => {
  useCacheCart();
  useCacheWishlist();

  return (
    <>
      <div className="app-layout-wrapper">
        <Header />
        <ToastContainer />

        <main className="app-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};
