import { useState } from "react";
import { Search, Heart, ShoppingCart, X } from 'lucide-react';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="bg-white lg:py-8 border-b border-gray-100 lg:border-none">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                {/* Main Navigation Row */}
                <nav className="flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
                    
                    {/* Logo - Hidden when search is expanded on mobile to save space */}
                    <div className={`${isSearchOpen ? 'hidden' : 'flex'} sm:flex flex-shrink-0`}>
                        <a href="#" className="font-bold text-2xl tracking-tight">
                            Exclusive
                        </a>
                    </div>

                    {/* Desktop Menu Links */}
                    <div className="hidden lg:ml-20 xl:ml-40 ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                        <a href="#" className="text-base text-black transition-all duration-200 hover:text-gray-400 decoration-2 underline-offset-4">
                            Home
                        </a>
                        <a href="#" className="text-base text-black transition-all duration-200 hover:text-gray-400 decoration-2 underline-offset-4">
                            Contact
                        </a>
                        <a href="#" className="text-base text-black transition-all duration-200 hover:text-gray-400 decoration-2 underline-offset-4">
                            About
                        </a>
                        <a href="#" className="text-base text-black transition-all duration-200 hover:text-gray-400 decoration-2 underline-offset-4">
                            Signup
                        </a>
                    </div>

                    {/* Right Side Actions (Search + Icons) */}
                    <div className="flex items-center gap-2 sm:gap-6 ml-auto lg:ml-0">
                        
                        {/* Expandable Search Bar */}
                        <div className={`relative flex items-center transition-all duration-300 ease-in-out ${
                            isSearchOpen ? 'w-[200px] sm:w-[300px]' : 'w-10 lg:w-[240px]'
                        }`}>
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className={`w-full py-2 pl-4 pr-10 bg-gray-100 rounded-md outline-none text-sm text-gray-700 placeholder-gray-500 transition-opacity duration-300 ${
                                    isSearchOpen ? 'opacity-100 block' : 'opacity-0 hidden lg:opacity-100 lg:block'
                                }`}
                            />
                            
                            {/* Search Toggle Button (Mobile) / Search Icon (Desktop) */}
                            <button 
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="absolute right-0 lg:right-3 p-2 lg:p-0 text-gray-600 lg:pointer-events-none"
                            >
                                {isSearchOpen ? <X size={20} className="lg:hidden" /> : <Search size={20} />}
                            </button>
                        </div>

                        {/* Action Icons - Hidden when search is open on very small screens */}
                        <div className={`${isSearchOpen ? 'hidden sm:flex' : 'flex'} items-center gap-3 sm:gap-4`}>
                            <button className="hover:text-gray-600 transition-colors p-1">
                                <Heart size={24} strokeWidth={1.5} />
                            </button>
                            <button className="relative hover:text-gray-600 transition-colors p-1">
                                <ShoppingCart size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Mobile Hamburger Menu Button */}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            type="button"
                            className={`inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 ${isSearchOpen ? 'hidden' : 'block'}`}
                        >
                            {!expanded ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu (xs to lg) */}
                {expanded && (
                    <nav className="flex flex-col py-4 px-2 space-y-2 lg:hidden bg-white border-t mt-1 animate-in slide-in-from-top duration-300">
                        {["Home", "Contact", "About", "Signup"].map(item => (
                            <a
                                key={item}
                                href="#"
                                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}