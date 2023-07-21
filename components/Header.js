import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            {" "}
            <p className="font-bold  md:text-3xl text-2xl text-white/80 header-stroke-text ">
              <span className="text-white font-serif ">Mahdi</span> Fallah
            </p>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
