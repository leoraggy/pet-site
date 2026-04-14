import logo from "../assets/logo.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>Pets-R-US</h1>
    </div>
  );
}

export default Header;
