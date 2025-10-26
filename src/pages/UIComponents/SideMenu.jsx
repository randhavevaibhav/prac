import { useState } from "react";
import { IoApps } from "react-icons/io5";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const sideMenuList = [
  {
    name: "General",
    icon: IoApps,
  },
  {
    name: "Teams",
    icon: PiMicrosoftTeamsLogo,
    subList: [
      {
        name: "CS",
        icon: RiCustomerService2Line,
        subList: [
          {
            name: "CS1",
          },
          {
            name: "CS2",
          },
        ],
      },
      {
        name: "IT",
        icon: RiComputerLine,
      },
    ],
  },
  {
    name: "Billing",
    icon: FaMoneyBillTrendUp,
  },
  {
    name: "Invoices",
    icon: LiaFileInvoiceDollarSolid,
  },
  {
    name: "Account",
    icon: MdPerson,
    subList: [
      {
        name: "Details",
        icon: TbListDetails,
      },
      {
        name: "Security",
        icon: MdOutlineSecurity,
      },
      {
        name: "Logout",
        icon: LuLogOut,
      },
    ],
  },
  {
    name: "Products",
    icon: MdOutlineProductionQuantityLimits,
    subList: [
      {
        name: "Adobe Acrobat",
      },
      {
        name: "MS Powerpoint",
      },
    ],
  },
];

const ExpandIcon = ({ expand = false }) => {
  return (
    <span
      className={`shrink-0 transition duration-300 ${
        expand ? `-rotate-180` : ``
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

const ExpandableListItem = ({ listItem }) => {
  const [expand, setExpand] = useState(false);

  return (
    <li>
      <div
        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        onClick={() => setExpand((prev) => !prev)}
      >
        <div className="flex gap-2 items-center">
          {listItem?.icon ? <listItem.icon /> : null}
          <span className="text-sm font-medium"> {listItem.name} </span>
        </div>

        <ExpandIcon expand={expand} />
      </div>
      {/* Sub-list */}
      <div
        className={`grid duration-500 ${
          expand ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr]  opacity-0`
        }`}
      >
        <ul className="mt-2 space-y-1 px-4 overflow-hidden">
          {listItem.subList.map((listItem,idx) => {
            return <ListItem listItem={listItem} key={idx}/>;
          })}
        </ul>
      </div>
    </li>
  );
};

const RegularListItem = ({ listItem }) => {
  return (
    <li >
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 w-full"
      >
        {listItem?.icon ? <listItem.icon /> : null}
        {listItem.name}
      </button>
    </li>
  );
};

const ListItem = ({ listItem }) => {
  if (listItem?.subList?.length > 0) {
    return <ExpandableListItem listItem={listItem} />;
  }

  return <RegularListItem listItem={listItem} />;
};

const List = ({ itemList }) => {
  return (
    <ul className="mt-6 space-y-1 ">
      {itemList.map((listItem,idx) => {
        return <ListItem listItem={listItem} key={idx}/>;
      })}
    </ul>
  );
};

const SideMenu = () => {
  return (
    <div>
      <h4 className="font-semibold text-xl m-2">Side Menu</h4>
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>
      </div>
      <List itemList={sideMenuList}/>
    </div>
  );
};

export default SideMenu;
