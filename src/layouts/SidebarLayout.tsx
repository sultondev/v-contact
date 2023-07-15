import { Outlet } from "react-router-dom";

const SideBarLayout = () => {
    return (
        <div className="flex">
            <div className="">Side Bar</div>

            <Outlet />
        </div>
    );
};

export default SideBarLayout;
