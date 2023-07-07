import React from "react";
import { logo } from "../../assets/index";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="w-full h-21 top-0 z-50 sticky bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-500">
      <div>
        <img src={logo} alt="logo" className="w-20 mt-3 mb-1" />
      </div>
      <div className=" text-designColor text-2xl lgl:text-4xl px-5">
        -&#62;&#123; Website Under Construction &#125;&#60;-
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
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
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-[#d1d5db] w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && ( //mdl:hidden absolute top-20 right-0 w-full h-screen bg-bodyColor flex justify-center items-center
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[#d1d5db] p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img src={logo} alt="logo" className="w-28" />
                <p className="text-sm text-lightText mt-2">
                  An ambitious Information Technology student specializing in
                  software engineering. With a GPA of 4.91 out of 5, I am eager
                  to apply my skills & knowledge in a professional setting!
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-designColor tracking-wide cursor-pointer hover:text-[#9265c0] duration-500"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-full h-full flex flex-col gap-8">
                <h2 className="text-base uppercase font-titleFont">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/AhmadRFC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
                      <FaTwitter />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmad-alabbasei-13086326b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
                      <FaLinkedin />
                    </span>
                  </a>
                  <a
                    href="https://github.com/AhmadRFC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
                      <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-lightText hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
