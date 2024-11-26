import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCar, FaPhoneAlt, FaHeadset, FaExchangeAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 relative">
      {/* Upper Features Section */}
      <div className="absolute -top-12 left-0 right-0">
        <div className="bg-[#00B853] text-white py-4 mx-4 rounded-md shadow-lg">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <FaCar className="text-white text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Free Shipping</h4>
                <p className="text-sm">Worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Helpline</h4>
                <p className="text-sm">+1256 25632 565</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaHeadset className="text-white text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">24/7 Support</h4>
                <p className="text-sm">Free For Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaExchangeAlt className="text-white text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Returns</h4>
                <p className="text-sm">30 Days Free Exchanges</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img
              src="/placeholder.svg"
              alt="Freshmat"
              className="h-12 mb-4"
            />
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center gap-2">
              <span>Hello to :</span>
              <a href="mailto:support@mail.com">support@mail.com</a>
            </div>
            <div className="flex gap-4 mt-4">
              <Link to="#" className="hover:text-[#00B853]">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-[#00B853]">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-[#00B853]">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-[#00B853]">
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Category Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Milk & Dairy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Coffee & Drinks
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Fresh & Fruits
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Fresh Dessert
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Cleaning Essential
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Aarong Dairy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Ashika Natural
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Agro Acres
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Organic Products
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Milk Sweet
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Delivery Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#00B853]">
                  Fresh Vegetables
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center">
          <p>&copy; Copyright © Freshmat 2023. All right reserved.</p>
          <div className="flex items-center gap-2">
            <span>Payment by :</span>
            <img src="/placeholder.svg" alt="Payment methods" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
