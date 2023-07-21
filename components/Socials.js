import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const DataHeader = [
  {
    name: "Youtube",
    path: "www.youtube.com",
    icon: <RiYoutubeLine />,
  },
  {
    name: "Instagram",
    path: "www.instagram.com",
    icon: <RiInstagramLine />,
  },
  {
    name: "FaceBook",
    path: "www.facebook.com",
    icon: <RiFacebookLine />,
  },
  {
    name: "Deibble",
    path: "",
    icon: <RiDribbbleLine />,
  },
  {
    name: "Behance",
    path: "",
    icon: <RiBehanceLine />,
  },
  {
    name: "Pinterest",
    path: "",
    icon: <RiPinterestLine />,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg xl:mr-24">
      {DataHeader.map((item, index) => (
        <Link
          href={item.path}
          className="hover:text-accent transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
