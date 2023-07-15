import { Outlet } from "react-router-dom";
import RoundedBox from "../components/UI/RoundedBox";

const SideBarLayout = () => {
    return (
        <div className="flex bg-main-bg min-h-screen">
            <div className="">
                Side Bar
            </div>

            <Outlet />
        </div>
    );
};

export default SideBarLayout;
