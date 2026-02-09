import HeroCarousel from "../Components/HeroCarousel";
import NavBar from "../Components/NavBar";
import ProductSlider from "../Components/ProductSlider";
import CategorySlider from "../Components/CategorySlider";
import BestSelling from "../Components/BestSelling";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
import BottomComponents from "../Components/BottomComponents";
import NewArrivalComponent from "../Components/NewArrivalComponent";

export default function Home() {
    return (
        <div>
            <TopHeader />
            <NavBar />
            <div className="flex align-middle">
                <div className="flex mx-auto gap-8">
                    <Sidebar />
                    <HeroCarousel />
                </div>
            </div>

            <div className="max-w-[1255px] ml-auto ">
                <ProductSlider />
            </div>
            <CategorySlider />
            <BestSelling />
            <div className="mb-14">
                <NewArrivalComponent />
            </div>
            {/* Bottom Components */}
            <div className='bottom-component flex justify-center pb-14'>
                <div className='bottom-components-div grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 w-[943px]'>
                    <BottomComponents prop={{
                        image: "./icon-delivery.svg",
                        title: "FREE AND FAST DELIVERY",
                        description: "Free delivery for all orders over $140",
                    }} />
                    <BottomComponents prop={{
                        image: "./Icon-Customer service.svg",
                        title: "24/7 CUSTOMER SERVICE",
                        description: "Friendly 24/7 customer support",
                    }} />
                    <BottomComponents prop={{
                        image: "./Icon-secure.svg",
                        title: "MONEY BACK GUARANTEE",
                        description: "We reurn money within 30 days",
                    }} />
                </div>
            </div>
            <Footer />
            {/* <Cart /> */}
        </div>
        
    )
}