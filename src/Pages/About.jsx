import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTruck,
  FaHeadset,
  FaUndo,
} from "react-icons/fa";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/Footer";
import TopHeader from "../Components/TopHeader";
import BottomComponents from "../Components/BottomComponents.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/src/assets/Frame 874.svg",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/src/assets/Frame 875.svg",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "/src/assets/Frame 876.svg",
  },
];
export default function About() {
  

  return (
    <>
      {/* Top Header & Navigation */}
      <TopHeader />
      <NavBar />
      <SearchBar />

      <div className="flex flex-col">
        <div className="bg-white py-16 relative">
          {/* Main Container */}
          <div className=" ml-auto md:justify-between flex lg:p-10 flex-col gap-10 lg:gap-20 lg:flex-row items-center lg:-space-x-20">
            {/* Left Side: Text Content */}
            <div className="flex flex-col gap-4 mx-auto w-[80%] lg:w-[525px]">
              <h2 className="text-5xl font-semibold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className=" text-gray-600 leading-relaxed font-Poppins text-[17px] font-normal">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </p>
              <p className="text-gray-600 leading-relaxed font-Poppins text-[17px] font-normal">
                Exclusive has more than 1 million products to offer, growing at
                a very fast rate. Exclusive offers a diverse assortment in
                categories ranging from consumer electronics to fashion and home
                appliances.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="flex justify-center">
              <img
                src="/src/assets/Side Image.svg"
                alt="Shopping Women"
                className="w-[80%] lg:w-[100%] h-auto max-md:static"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}

        <section className="py-12">
          <div className="max-w-screen-2xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="px-6 lg:flex lg:justify-between lg:w-[1170px] lg:gap-9"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="lg:flex lg:justify-between w-[370px]">
                  <div className="bg-white p-6 w-[370px] flex flex-col mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[370px] h-[430px] object-cover mx-auto"
                    />
                    <h3 className="text-3xl mt-4">{member.name}</h3>
                    <p className="text-gray-500 text-xs">{member.role}</p>
                    <div className="flex  mt-2 space-x-3">
                      <FaTwitter className="text-gray-500 size-6 hover:text-blue-400 cursor-pointer" />
                      <FaInstagram className="text-gray-500 size-6 hover:text-pink-500 cursor-pointer" />
                      <FaLinkedin className="text-gray-500 size-6 hover:text-blue-600 cursor-pointer" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Features Section */}
        <div className="bottom-component flex justify-center mt-16">
          <div className="bottom-components-div grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 w-[943px]">
            <BottomComponents
              prop={{
                image: "./icon-delivery.svg",
                title: "FREE AND FAST DELIVERY",
                description: "Free delivery for all orders over $140",
              }}
            />
            <BottomComponents
              prop={{
                image: "./Icon-Customer service.svg",
                title: "24/7 CUSTOMER SERVICE",
                description: "Friendly 24/7 customer support",
              }}
            />
            <BottomComponents
              prop={{
                image: "./Icon-secure.svg",
                title: "MONEY BACK GUARANTEE",
                description: "We reurn money within 30 days",
              }}
            />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Footer */}
      <Footer />
    </>
  );
}
