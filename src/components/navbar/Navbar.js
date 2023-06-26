import React from "react";
import { logo } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-21 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-500">
      <div>
        <img src={logo} alt="logo" className="w-20 mt-3 mb-1" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-lightText tracking-wide cursor-pointer hover:text-designColor duration-500"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
