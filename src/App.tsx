import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBarLayout from "./layouts/SidebarLayout";
import RegLayout from "./layouts/RegLayout";
import ContactsPage from "./pages/ContactsPage";
import ProfilePage from "./pages/ProfilePage";
import TagsPage from "./pages/TagsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          {/* splitting layouts */}
          <Route path="/" element={<SideBarLayout />}>
            <Route path="tags" element={<TagsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="/" element={<RegLayout />}>
            <Route path="reg">
              <Route path="dashboard" element={<h1>dwadwa</h1>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
