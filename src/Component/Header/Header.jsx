import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold">Hi! Well Come To My Web Site</h2>
           <nav className="space-x-3">
                <span className="font-medium text-pink-950 ">MY LINKS ARE HERE:</span>
                <NavLink to= '/'>HOME</NavLink>

                <NavLink to= '/About'>ABOUT</NavLink>
                <NavLink to ='/Contact'>CONTACT</NavLink>
                <NavLink to = '/Meals'>MEALS</NavLink>
          </nav>
    </div>
  );
};

export default Header;