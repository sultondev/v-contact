import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SideBarLayout from "./layouts/SidebarLayout";
import RegLayout from "./layouts/RegLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="">
                    {/* splitting layouts */}
                    <Route path="/" element={<SideBarLayout />}>
                        <Route path="dashboard" element={<MainPage />} />
                    </Route>
                    <Route path="/" element={<RegLayout />}>
                        <Route path="reg">
                            <Route
                                path="dashboard"
                                element={<MainPage />}
                            ></Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
