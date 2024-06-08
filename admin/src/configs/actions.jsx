import { BiLogOutCircle } from "react-icons/bi";
import { BsFillHousesFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiHandshakeFill } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";

export const actions = [
  {
    name: "Logout",
    navigate: "/",
    icon: <BiLogOutCircle className="text-xl text-red-500" />,
  },
  {
    name: "HelpDesk",
    navigate: "/help-desk",
    icon: <BiSolidHelpCircle className="text-xl text-green-500" />,
  },
  {
    name: "Site Visit",
    navigate: "/site-visit",
    icon: <BsFillHousesFill className="text-xl text-blue-500" />,
  },
  {
    name: "Seller Accounts",
    navigate: "/seller-accounts",
    icon: <AiOutlineUsergroupAdd className="text-xl text-blue-500" />,
  },
  {
    name: "Reserved Shares",
    navigate: "/reserved-shares",
    icon: <PiHandshakeFill className="text-xl text-orange-500" />,
  },
  {
    name: "Property Verifications",
    navigate: "/home",
    icon: <TiTickOutline className="text-xl text-emerald-500" />,
  },
  {
    name: "Dashboard",
    navigate: "/dashboard",
    icon: <RiDashboardFill className="text-xl text-black" />,
  },
];
