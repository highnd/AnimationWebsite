import { HiHome, HiUser } from "react-icons/hi";
import { HiRectangleGroup, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";

// next Link
import Link from "next/link";
// next router
import { useRouter } from "next/router";

//  links
const Datalinks = [
  {
    name: "home",
    path: "/",
    icon: <HiHome />,
  },
  {
    name: "about",
    path: "/about",
    icon: <HiUser />,
  },
  {
    name: "services",
    path: "/services",
    icon: <HiRectangleGroup />,
  },
  {
    name: "work",
    path: "/work",
    icon: <HiViewColumns />,
  },
  {
    name: "documentation",
    path: "/documentationModule",
    icon: <FaCode />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed 
    h-max bottom-0 mt-auto xl:right-[2%] z-[100] top-0 w-full xl:w-16 
    xl:max-w-md xl:h-screen "
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center
       gap-y-10 px-4 py-8 md:px-40 xl:px-0 
       h-[80px] xl:h-max  bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {Datalinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={` hover:text-accent flex items-center group rounded-full sm:p-2 p-1   transition-all duration-300  ${
                link.path === pathname && "text-accent "
              }`}
            >
              {/* tooltip */}

              <div className=" absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent
                   border-y-[6px] border-r-0 absolute -right-2 "
                  ></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
