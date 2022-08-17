import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Logout from "./login/LogoutButton";

function App({ user, handleLogout }) {
  return (
    <div>
      {user && <Logout handleLogout={handleLogout} />}
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
