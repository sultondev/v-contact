import { Outlet, useLocation } from "react-router-dom";
import "../assets/styles/layouts/sidebar-layout.scss";
import Sidebar from "../components/Sidebar";

import { Breadcrumb } from "antd";
import React from "react";

const SideBarLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex bg-main-bg min-h-screen">
      <Sidebar />
      <div className="w-full px-8 py-6">
        <Breadcrumb
          className="font-medium text-base"
          items={[
            {
              title: "Pages",
            },
            {
              title: (
                <div className="capitalize text-regular-clr ">
                  {pathname.replace("/", "")}
                </div>
              ),
            },
          ]}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default SideBarLayout;
