import { useState } from "react";
import logo from "../images/logo.png";
import { IoMdCall, IoLogoTwitter, IoMdHeartEmpty } from "react-icons/io";
import { FaEnvelopeOpenText, FaRegUser } from "react-icons/fa";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineBehance } from "react-icons/ai";
import { PiHeadset } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBasket2 } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import list1 from "../images/category_list_icon_15.png";
import list2 from "../images/category_list_icon_10.png";
import list3 from "../images/category_list_icon_4.png";
import list4 from "../images/category_list_icon_12.png";
import list5 from "../images/category_list_icon_11.png";
import list6 from "../images/category_list_icon_14.png";
import list7 from "../images/category_list_icon_9.png";
import list8 from "../images/category_list_icon_2.png";
import list9 from "../images/category_list_icon_7.png";
import { VscArchive } from "react-icons/vsc";
import menu from "../images/menu_img.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    {
      label: "Fresh & Organic",
      icon: list1,
      submenu: [
        { slabel: "Cauliflowers", sicon: list1 },
        { slabel: "Broccolis", sicon: list2 },
        { slabel: "Carrots", sicon: list3 },
        { slabel: "Spinach", sicon: list4 },
        { slabel: "Lettuce", sicon: list5 },
        { slabel: "Celery", sicon: list6 },
        { slabel: "Cabbages", sicon: list7 },
        { slabel: "Tomatoes", sicon: list8 },
        { slabel: "Zucchinis", sicon: list9 },
        { slabel: "Cherries", sicon: list1 },
      ],
    },
    {
      label: "Sea Fish",
      icon: list2,
      submenu: [
        { slabel: "Salmon", sicon: list1 },
        { slabel: "Tuna", sicon: list2 },
        { slabel: "Shrimps", sicon: list3 },
        { slabel: "Crabs", sicon: list4 },
        { slabel: "Codfish", sicon: list5 },
        { slabel: "Halibut", sicon: list6 },
        { slabel: "Sardines", sicon: list7 },
        { slabel: "Mackerel", sicon: list8 },
        { slabel: "Anchovies", sicon: list9 },
        { slabel: "Trout", sicon: list1 },
      ],
    },
    {
      label: "Meat",
      icon: list3,
      submenu: [
        { slabel: "Chicken", sicon: list1 },
        { slabel: "Beef", sicon: list2 },
        { slabel: "Lamb", sicon: list3 },
        { slabel: "Pork", sicon: list4 },
        { slabel: "Duck", sicon: list5 },
        { slabel: "Turkey", sicon: list6 },
        { slabel: "Goat", sicon: list7 },
        { slabel: "Veal", sicon: list8 },
        { slabel: "Rabbit", sicon: list9 },
        { slabel: "Bison", sicon: list1 },
      ],
    },
    {
      label: "Bakery & Biscuits",
      icon: list4,
      submenu: [
        { slabel: "Bread", sicon: list1 },
        { slabel: "Cookies", sicon: list2 },
        { slabel: "Croissants", sicon: list3 },
        { slabel: "Cakes", sicon: list4 },
        { slabel: "Pies", sicon: list5 },
        { slabel: "Muffins", sicon: list6 },
        { slabel: "Tarts", sicon: list7 },
        { slabel: "Bagels", sicon: list8 },
        { slabel: "Biscuits", sicon: list9 },
        { slabel: "Buns", sicon: list1 },
      ],
    },
    {
      label: "Health & Beauty",
      icon: list5,
      submenu: [
        { slabel: "Skincare", sicon: list1 },
        { slabel: "Haircare", sicon: list2 },
        { slabel: "Perfume", sicon: list3 },
        { slabel: "Lipsticks", sicon: list4 },
        { slabel: "Foundations", sicon: list5 },
        { slabel: "Soaps", sicon: list6 },
        { slabel: "Shampoos", sicon: list7 },
        { slabel: "Conditioners", sicon: list8 },
        { slabel: "Moisturizers", sicon: list9 },
        { slabel: "Masks", sicon: list1 },
      ],
    },
    {
      label: "Fresh Fruits",
      icon: list6,
      submenu: [
        { slabel: "Apples", sicon: list1 },
        { slabel: "Bananas", sicon: list2 },
        { slabel: "Grapes", sicon: list3 },
        { slabel: "Mangoes", sicon: list4 },
        { slabel: "Oranges", sicon: list5 },
        { slabel: "Pineapples", sicon: list6 },
        { slabel: "Peaches", sicon: list7 },
        { slabel: "Plums", sicon: list8 },
        { slabel: "Pears", sicon: list9 },
        { slabel: "Cherries", sicon: list1 },
      ],
    },
    {
      label: "Coffee & Drink",
      icon: list7,
      submenu: [
        { slabel: "Espresso", sicon: list1 },
        { slabel: "Cappuccino", sicon: list2 },
        { slabel: "Latte", sicon: list3 },
        { slabel: "Americano", sicon: list4 },
        { slabel: "Black Tea", sicon: list5 },
        { slabel: "Green Tea", sicon: list6 },
        { slabel: "Milkshakes", sicon: list7 },
        { slabel: "Juices", sicon: list8 },
        { slabel: "Sodas", sicon: list9 },
        { slabel: "Smoothies", sicon: list1 },
      ],
    },
    {
      label: "Cleaning",
      icon: list8,
      submenu: [
        { slabel: "Detergent", sicon: list1 },
        { slabel: "Dish Soap", sicon: list2 },
        { slabel: "Bleach", sicon: list3 },
        { slabel: "Mops", sicon: list4 },
        { slabel: "Sponges", sicon: list5 },
        { slabel: "Disinfectants", sicon: list6 },
        { slabel: "Floor Cleaner", sicon: list7 },
        { slabel: "Glass Cleaner", sicon: list8 },
        { slabel: "Toilet Cleaner", sicon: list9 },
        { slabel: "Trash Bags", sicon: list1 },
      ],
    },
    {
      label: "Breakfast",
      icon: list9,
      submenu: [
        { slabel: "Pancakes", sicon: list1 },
        { slabel: "Waffles", sicon: list2 },
        { slabel: "Eggs", sicon: list3 },
        { slabel: "Bacon", sicon: list4 },
        { slabel: "Toast", sicon: list5 },
        { slabel: "Cereal", sicon: list6 },
        { slabel: "Oatmeal", sicon: list7 },
        { slabel: "Bagels", sicon: list8 },
        { slabel: "Fruits", sicon: list9 },
        { slabel: "Yogurt", sicon: list1 },
      ],
    },
  ];

  const homeItems = ["Home Style 01", "Home Style 02", "Home Style 03"];

  // pages
  const pages = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Blog Details" },
    { id: 3, name: "Shop Details" },
    { id: 4, name: "Cart View" },
    { id: 5, name: "Checkout" },
    { id: 6, name: "Payment" },
    { id: 7, name: "Order Tracking" },
    { id: 8, name: "Our Team" },
    { id: 9, name: "Team Details" },
    { id: 10, name: "Error 404" },
    { id: 11, name: "Faq's" },
    { id: 12, name: "Gallery" },
    { id: 13, name: "Sign Up" },
    { id: 14, name: "Forgot Password" },
    { id: 15, name: "Privacy Policy" },
    { id: 16, name: "Terms & Conditions" },
    { id: 17, name: "Flash Sell" },
  ];

  // shop

  const shops = [
    {
      id: 1,
      name: "Fresh & Organic",
      shopsubmenu: [
        { slabel: "Espresso", sicon: list1 },
        { slabel: "Cappuccino", sicon: list2 },
        { slabel: "Latte", sicon: list3 },
        { slabel: "Americano", sicon: list4 },
        { slabel: "Black Tea", sicon: list5 },
        { slabel: "Green Tea", sicon: list6 },
        { slabel: "Milkshakes", sicon: list7 },
        { slabel: "Juices", sicon: list8 },
        { slabel: "Sodas", sicon: list9 },
        { slabel: "Smoothies", sicon: list1 },
      ],
    },
    {
      id: 2,
      name: "Bakery & Organic",
      shopsubmenu: [
        { slabel: "Espresso", sicon: list1 },
        { slabel: "Cappuccino", sicon: list2 },
        { slabel: "Latte", sicon: list3 },
        { slabel: "Americano", sicon: list4 },
        { slabel: "Black Tea", sicon: list5 },
        { slabel: "Green Tea", sicon: list6 },
        { slabel: "Milkshakes", sicon: list7 },
        { slabel: "Juices", sicon: list8 },
        { slabel: "Sodas", sicon: list9 },
        { slabel: "Smoothies", sicon: list1 },
      ],
    },
    {
      id: 3,
      name: "Fresh & Organic",
      shopsubmenu: [
        { slabel: "Espresso", sicon: list1 },
        { slabel: "Cappuccino", sicon: list2 },
        { slabel: "Latte", sicon: list3 },
        { slabel: "Americano", sicon: list4 },
        { slabel: "Black Tea", sicon: list5 },
        { slabel: "Green Tea", sicon: list6 },
        { slabel: "Milkshakes", sicon: list7 },
        { slabel: "Juices", sicon: list8 },
        { slabel: "Sodas", sicon: list9 },
        { slabel: "Smoothies", sicon: list1 },
      ],
    },
  ];

  const chunkSize = Math.ceil(shops.length / 3);
  const shopChunks = Array.from({ length: 3 }, (_, i) =>
    shops.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  // Toggle the dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      <div className="title mr-1">
        {/* top header */}
        <div className="top-header flex justify-between px-14 bg-green-600 text-slate-50">
          <div className="contact">
            <ul className="flex justify-between space-x-6 text-sm py-2.5">
              <li className="flex cursor-pointer">
                <IoMdCall className="pt-0 pr-1 w-5 h-5" />
                +1 (700) 230-0035
              </li>
              <li className="flex cursor-pointer">
                <FaEnvelopeOpenText className="pt-1 pr-1 w-4 h-4" />
                company@gmail.com
              </li>
              <li className="flex">
                <IoLocationSharp className="pt-1 pr-1 w-5 h-5" />
                <p> New York, United States</p>
              </li>
            </ul>
          </div>
          <div className="icons">
            <ul className="flex justify-between space-x-1 py-3">
              <li
                className="flex items-center border-r border-gray-100 pr-2"
                style={{ height: "16px" }}
              >
                <TiSocialFacebook className="w-5 h-5 hover:text-gray-400" />
              </li>
              <li
                className="flex items-center border-r border-gray-100 pr-2"
                style={{ height: "16px" }}
              >
                <TiSocialLinkedin className="w-5 h-5 hover:text-gray-400" />
              </li>
              <li
                className="flex items-center border-r border-gray-100 pr-2"
                style={{ height: "16px" }}
              >
                <IoLogoTwitter className="w-5 h-5 p-1 hover:text-gray-400" />
              </li>
              <li className="flex items-center pr-2" style={{ height: "16px" }}>
                <AiOutlineBehance className="w-6 h-6 p-1 hover:text-gray-400" />
              </li>
            </ul>
          </div>
        </div>
        {/* middel header */}
        <div className="flex justify-between pt-4 px-14 text-black">
          <div>
            <img src={logo} alt="" className="cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search your product..."
                className="border border-gray-400 pr-80 py-3 pl-4 w-full focus:outline-none focus:ring-0"
              />
              {/* Search Icon as Button */}
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 p-3 hover:bg-black">
                <IoSearch className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Icon */}
            <PiHeadset className="text-3xl" />

            {/* Text Content */}
            <div>
              <h3 className="font-semibold text-lg">55 0562-256</h3>
              <span className="text-gray-600 text-xs font-medium">
                24/7 Support Center
              </span>
            </div>
          </div>
        </div>

        {/* Browse Category full row */}

        <div className="title bg-customGray mt-3 relative">
          <div className="flex justify-between px-14 text-black">
            {/* Left Side - Browse Category */}
            <div className="flex gap-10">
              <div>
                {/* Main Dropdown */}
                <div
                  onClick={toggleDropdown}
                  className="items-center space-x-2 bg-green-500 flex p-3 w-64"
                >
                  <div>
                    <span>
                      <BiCategoryAlt className="text-xl text-white" />
                    </span>
                  </div>
                  <div>
                    <h2 className="text-white group flex">Browse Category</h2>
                  </div>
                  <div>
                    <span>
                      <RiArrowDropDownLine
                        className={`text-4xl ml-auto text-white flex ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <div>
                  <ul
                    className={`absolute top-full border border-gray-300 cursor-pointer z-10 bg-white w-64 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className=""
                      >
                        {/* Main Item */}
                        <li className="pl-2 pr-5 py-3 text-gray-500 flex items-center group border border-gray-300">
                          <span className="w-8 h-8 overflow-hidden flex mr-2.5">
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="object-cover"
                            />
                          </span>
                          {item.label}
                          {item.submenu && (
                            <MdKeyboardArrowRight className="w-6 h-6 ml-auto text-gray-500" />
                          )}
                        </li>

                        {/* Submenu */}
                        {item.submenu && hoveredIndex === index && (
                          <ul className="absolute left-full top-0 border border-gray-300 bg-white w-48 shadow-lg mt-0">
                            {item.submenu.map((subitem, subIndex) => (
                              <li
                                key={subIndex}
                                className="pl-3 pr-5 py-2 text-gray-500 flex items-center border border-gray-300 hover:bg-gray-100"
                              >
                                {subitem.slabel}
                                <MdKeyboardArrowRight className="w-6 h-6 ml-auto text-gray-500" />
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Middle - Navigation Links (Home, Shop, Blog, etc.) */}
              <div className="flex items-center space-x-8">
                <ul className="flex space-x-5 text-gray-600 font-medium text-base">
                  <li className="relative cursor-pointer items-center space-x-1 hover:text-green-500 flex group">
                  <Link to="/Home">
                    <span className="flex items-center">Home <RiArrowDropDownLine className="text-4xl pt-2" /></span>
                    </Link> 
                    <ul className="absolute top-full left-0 hidden group-hover:block bg-white border mt-3 border-gray-300 shadow-md w-40 z-10">
                      {homeItems.map((home, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-gray-100 text-gray-500 cursor-pointer"
                        >
                          {home}
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li  className="cursor-pointer items-center space-x-1 hover:text-green-500 flex group">
                    <Link to="/shop">

                    <span className="flex items-center">Shop <RiArrowDropDownLine className="text-4xl pt-2" /></span>
                    
                    </Link> 

                    {/* Dropdown menu */}
                    <div className="absolute top-16 group-hover:flex hidden space-x-4 bg-white shadow-md z-10 ">
                      <ul className="grid grid-cols-12 gap-3 w-full">
                        {shops.map((sh, i) => (
                          <li key={sh.id} className="col-span-3 text-sm">
                            <p className="text-lg font-bold text-gray-500 hover:text-green-500 pt-2 pl-3 pr-3">
                              {sh.name}
                            </p>

                            {sh.shopsubmenu && (
                              <div className="mt-2">
                                {sh.shopsubmenu.map((item, i) => (
                                  <div
                                    key={i}
                                    className="text-gray-500 flex items-center space-x-2 pb-3 pl-4"
                                  >
                                    <p>{item.slabel}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}

                        <li className="col-span-3 text-xl font-bold text-gray-500">
                          <img
                            src={menu}
                            alt="Shop Banner"
                            className="w-full h-full object-cover"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="cursor-pointer items-center space-x-1 hover:text-green-500 flex">
                  <Link to="/Blog">
                    <span className="flex items-center">Blog </span>
                    </Link> 
                  </li>
                  <li className="cursor-pointer items-center space-x-1 text-green-500 flex group relative z-10">
                  <Link to="/Page">
                    <span className="flex items-center">Page <RiArrowDropDownLine className="text-4xl pt-2" /></span>
                    </Link> 

                    {/* Dropdown menu */}
                    <ul className="absolute left-0 top-full hidden bg-white border shadow-md group-hover:block w-56">
                      {pages.map((page) => (
                        <li
                          key={page.id}
                          className="cursor-pointer px-4 py-2 hover:text-green-500 hover:bg-gray-100 text-gray-500"
                        >
                          {page.name}
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="cursor-pointer items-center space-x-1 hover:text-green-500 flex">
                  <Link to="/Contact">
                    <span className="flex items-center">Contact </span>
                    </Link> 
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Icons */}
            <div className="flex items-center space-x-3">
              <ul className="flex space-x-8 py-3">
                <li className="relative hover:text-green-500 hover:border-green-500 flex">
                  <span className="absolute top-[-4px] right-[-4px] bg-green-500 flex text-white text-xs rounded-full px-1">
                    2
                  </span>
                  <BsBasket2 className="text-4xl border rounded-full border-gray-400 p-2 hover:text-green-500 flex hover:border-green-500" />
                </li>
                <li className="relative hover:text-green-500 hover:border-green-500 flex">
                  <span className="absolute top-[-4px] right-[-4px] bg-green-500 flex text-white text-xs rounded-full px-1">
                    5
                  </span>
                  <IoMdHeartEmpty className="text-4xl border rounded-full border-gray-400 p-2 hover:text-green-500 flex hover:border-green-500" />
                </li>
                <li className="hover:text-green-500 hover:border-green-500 flex">
                  <FaRegUser className="text-4xl border rounded-full border-gray-400 p-2 hover:text-green-500 flex hover:border-green-500" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
