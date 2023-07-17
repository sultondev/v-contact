import { useLocation } from "react-router";
import navbarData from "../constants/menu/navbarData";
import NavbarItem from "../components/UI/NavbarItem";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={`sidebar ${"sidebar-open"}`}>
      <h1 className="mb-7 text-2xl font-bold flex items-center px-2">
        <Icon icon="basil:contacts-solid" className="mr-2" />
        <span>V-contact</span>
      </h1>
      <div className="h-0.5 w-3/4 bg-[#E0E1E2] rounded-full mb-6 mx-auto"></div>
      <nav className={`nav ${"nav-open"}`}>
        {navbarData.map((navItem) => {
          return (
            <NavbarItem
              icon={navItem.icon}
              name={navItem.name}
              currentPath={pathname}
              key={navItem.path + navItem.name}
              path={navItem.path}
              classes="!mb-2"
            />
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
