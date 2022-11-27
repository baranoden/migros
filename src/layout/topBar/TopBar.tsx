import { Navbar } from "react-bootstrap";
import { IoChevronBack } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import "./TopBar.scss";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar
      className={`top-bar ${
        location.pathname.substring(0, 7) === "/mkolay" ? "green" : "purple"
      }`}
      expand="lg"
    >
      <IoChevronBack
        onClick={() =>
          location.pathname.substring(0, 15) === "/mkolay/history"
            ? navigate("/mkolay/onboard")
            : navigate("/")
        }
        size={30}
      />
      <span>MKOLAY</span>
    </Navbar>
  );
};

export default TopBar;
