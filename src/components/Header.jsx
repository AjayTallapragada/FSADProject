import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">
      <h1>XERA</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/cart" className="cart-icon">
          <AiOutlineShoppingCart size={28} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
