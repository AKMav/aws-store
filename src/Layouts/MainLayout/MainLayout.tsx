import { Outlet } from "react-router-dom";
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
        <main className="app-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
