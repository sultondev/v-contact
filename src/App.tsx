import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import SideBarLayout from "./layouts/SidebarLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SideBarLayout />
          }
        >
          <Route path="/dashboard" element={<MainPage />}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
