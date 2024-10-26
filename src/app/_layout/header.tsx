"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { menus } from "../_navigation/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 py-2">
            <nav className="nav flex flex-wrap items-center max-w-screen-2xl justify-between m-auto px-5 lg:px-14">
                <div className="p-4 flex justify-between w-full">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                        className="w-[140px] h-[30px] lg:w-[230px] lg:h-[50px]"
                    />

                    <button
                        className="text-gray-800 block md:hidden"
                        onClick={handleMenuClick}
                    >
                        <CiMenuFries size={24} />
                    </button>
                </div>

                <ul
                    className="menu hidden justify-center list-reset m-0 w-full md:w-auto font-raleway font-medium  md:flex"
                    id="nav-links"
                >
                    {menus.map((menu, index) => (
                        <li key={index} className="px-2">
                            <Link
                                href={menu.linkUrl}
                                className={`block md:inline-block px-4 py-3 hover:text-primary transition-all duration-300 ease-in-out ${
                                    pathname === menu.linkUrl
                                        ? "text-primary font-bold"
                                        : "text-gray-950"
                                }`}
                                onClick={handleMenuItemClick}
                            >
                                {menu.linkTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50 px-5`}
            >
                <div className="p-4 flex justify-between mt-2">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                        className="w-[140px] h-[30px]"
                    />
                    <button className="text-gray-800" onClick={handleMenuClick}>
                        <IoIosClose size={38} />
                    </button>
                </div>
                <ul className="mt-4">
                    {menus.map((menu, index) => (
                        <li key={index} className="px-4 py-2">
                            <Link
                                href={menu.linkUrl}
                                className={`block px-4 py-2 hover:text-primary transition-all duration-300 ease-in-out ${
                                    pathname === menu.linkUrl
                                        ? "text-primary font-bold"
                                        : "text-gray-950"
                                }`}
                                onClick={handleMenuItemClick}
                            >
                                {menu.linkTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
