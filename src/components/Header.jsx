import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <header className="header">
      <h1 className="header-title">AJ'S E-COMMERCE WEBSITE</h1>
      <nav>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>LOGIN</li>
          <li onClick={() => navigate("/home")}>PRODUCTS</li>
          <li onClick={() => navigate("/about")}>ABOUT</li>
          <li onClick={() => navigate("/contact")}>CONTACT</li>
          <li onClick={() => navigate("/cart")} className="cart-button">
            <FiShoppingCart size={30} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
