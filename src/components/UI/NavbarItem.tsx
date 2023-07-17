import RoundedBox from "./RoundedBox";
import { Icon } from "@iconify/react";

type Props = {
  path: string;
  currentPath: string;
  icon: string;
  name: string;
  classes: string;
};

const NavbarItem = (props: Props) => {
  const { path, currentPath, icon, name, classes } = props;
  if (currentPath === path) {
    return (
      <RoundedBox
        boxType="link"
        path={path}
        classes={`block shadow-regularBox ${classes}`}
      >
        <div className="flex items-center">
          <div className="bg-main-clr p-2 mr-3 rounded-xl">
            <Icon icon={icon} className="text-white text-lg " />
          </div>
          <div className="transiton-all duration-200 text-regular-clr font-bold">
            {name}
          </div>
        </div>
      </RoundedBox>
    );
  }

  return (
    <>
      <RoundedBox
        boxType="link"
        path={path}
        classes={`block rounded-box__unselected group ${classes}`}
      >
        <div className="flex items-center">
          <div className="bg-main-clr p-2 mr-3 rounded-xl">
            <Icon icon={icon} className="text-white text-lg " />
          </div>
          <div className="transiton-all duration-200 text-gray-400-clr group-hover:text-regular-clr font-bold">
            {name}
          </div>
        </div>
      </RoundedBox>
    </>
  );
};

export default NavbarItem;
