import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/templates";
import { useSaveBuyerCart as saveBuyerCartToStorageOnChange } from "@/hooks";
import "./style.scss";

export const MainLayout = () => {
  saveBuyerCartToStorageOnChange();

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
