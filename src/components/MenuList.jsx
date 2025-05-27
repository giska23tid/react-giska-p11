import { BiErrorCircle } from "react-icons/bi";
import { BiMessageAltError } from "react-icons/bi";
import { BiError } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { MdFastfood } from "react-icons/md";

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      to: "/",
      icon: <MdDashboard className="mr-4 text-xl" />,
      label: "Dashboard",
    },
    {
      id: 2,
      to: "/orders",
      icon: <AiOutlineBars className="mr-4 text-xl" />,
      label: "Orders",
    },
    {
      id: 3,
      to: "/customers",
      icon: <FiHeadphones className="mr-4 text-xl" />,
      label: "Customers",
    },
    {
      id: 4,
      to: "/Users",
      icon: <BiErrorCircle className="mr-4 text-xl" />,
      label: "Users",
    },
    {
      id: 5,
      to: "/products",
      icon: <MdFastfood className="mr-4 text-xl" />,
      label: "Products",
    },
  ];

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${
      isActive
        ? "text-pink bg-pink-300 font-extrabold"
        : "text-pink-700 hover:text-pink-900 hover:bg-pink-300 hover:font-extrabold"
    }`;

  return (
    <ul className="space-y-3">
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink to={item.to} className={menuClass}>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
