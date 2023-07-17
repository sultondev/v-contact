type NavbarDataTypes = {
  name: string;
  path: string;
  icon: string;
};

const navbarData: NavbarDataTypes[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "ion:home",
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: "typcn:contacts",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa6-solid:user-large",
  },
];

export default navbarData;
