import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Root/Root";
import './Header';


const Header = () => {

  const [cart, setCart] = useContext(CartContext)
  return (
        <div className="navbar bg-base-100 shadow-lg px-12">
            <div className="flex-1">
                     <Link className="btn btn-ghost text-xl font-bold uppercase" to="/">Smart Home</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/cart'>
              <p>Cart</p>
              <sup className="font-bold">{cart.length}</sup>
            
            </Link></li>
            <li><Link to='/about'>About</Link></li>
                     
          </ul>
        </div>
      </div>
    );
};

export default Header;