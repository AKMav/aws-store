import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import { Footer } from "@/components";
import "./style.scss";

export const Layout = () => {
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
