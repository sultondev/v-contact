type NavbarDataTypes = {
  name: string;
  path: string;
  icon: string;
};

const navbarData: NavbarDataTypes[] = [
  {
    name: "Contacts",
    path: "/contacts",
    icon: "typcn:contacts",
  },
  {
    name: "Tags",
    path: "/tags",
    icon: "ion:home",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa6-solid:user-large",
  },
];

export default navbarData;
