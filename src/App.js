import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkmodeContext";
import Ads from "./pages/ads/Ads";
import Home from "./pages/home/Home";
import Logout from "./pages/logout/Logout";
import New from "./pages/new/New";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import "./style/darkmode.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Loginn from "./pages/login/Loginn";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Chart from "./Components/Searcher/Chart";

// App Component
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Provider store={store}>
      <div className={darkMode ? "app darkmode" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/annonceur" element={<Single />} />
            <Route path="/chercheur" element={<New />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
