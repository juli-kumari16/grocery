import React from "react";
import bg from "../images/breadcrumb_bg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../components/Header";
import { RxHome } from "react-icons/rx";
import Carousel from "react-grid-carousel";
import img1 from "../images/category_icon_2.png"
import Footer from "../components/Footer";

const Home = () => {

  const items = [
    { id: 1, title: "Item 1", image: img1 },
    { id: 2, title: "Item 2", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Item 3", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Item 4", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Item 5", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Item 6", image: "https://via.placeholder.com/150" },
  ];



  return (
    <div className="main">
      <div className="head">
        <Header className=" overflow-hidden" />
        <div
          className="bg-cover bg-center h-80 relative"
          style={{
            backgroundImage: `url(${bg})`, // Set the image imported from src folder
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative items-center justify-left text-white py-32 px-20 z-10">
            <h1 className="text-4xl font-bold">Shop</h1>
            <div className="flex space-x-3 mt-4">
              <span className="flex items-center">
                <RxHome className="pr-2 w-6 h-6" />
                Home
                <MdKeyboardArrowRight className="text-white w-6 h-6 ml-2" />
              </span>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* grid carasouel */}

      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Grid Carousel Example</h1>

      <Carousel cols={3} rows={1} gap={10} loop>
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="p-4 bg-white shadow-md rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-md"
              />
              <h3 className="mt-2 text-center font-semibold">{item.title}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>



<Footer/>
    </div>
  );
};

export default Home;
