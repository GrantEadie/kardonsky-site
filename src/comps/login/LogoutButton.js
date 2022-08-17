import "./logout-button.css";
import { SignOut } from "phosphor-react";

const Logout = ({ handleLogout }) => {
  return (
    <div id="logout-button" onClick={() => handleLogout()}>
      <SignOut size={20} weight="fill" />
    </div>
  );
};

export default Logout;
