'use client'
import { useState } from "react";
import Link from "next/link";
import NextSVG from '../../../public/next.svg';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`sticky top-0 z-20 py-3 bg-white`}>
            <div className="flex justify-between items-center">
                <div className="flex-shrink-0">
                    <img
                        src={NextSVG}
                        alt="Logo"
                        height={55}
                        width={55}
                    />
                </div>
                <div className="md:hidden block">
                    <button
                        onClick={toggleMenu}
                        className="text-black px-3 py-2 rounded-md text-lg font-bold absolute top-5 md:top-10 right-10 "
                    >
                        {/* Icono del menú */}
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/#about">
                        <span
                            className={
                                pathname === '/#about'
                                    ? 'text-black'
                                    : 'text-black px-3 py-2 rounded-md text-lg font-bold hover:underline'
                            }
                        >
                            Acerca de
                        </span>
                    </Link>
                    <Link href="/#suscribe">
                        <span
                            className={
                                pathname === '/#suscribe'
                                    ? 'text-black'
                                    : 'text-black px-3 py-2 rounded-md text-lg font-bold hover:underline'
                            }
                        >
                            Inscribete
                        </span>
                    </Link>
                </div>
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="mt-2 w-48 bg-white rounded-md shadow-lg fixed right-2 top-10 z-[9999]">
                        <Link href="/#about">
                            <span
                                onClick={toggleMenu}
                                className={
                                    pathname === '/#about'
                                        ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                                        : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                                }
                            >
                                Acerca de
                            </span>
                        </Link>
                        <Link href="/#suscribe">
                            <span
                                onClick={toggleMenu}
                                className={
                                    pathname === '/#suscribe'
                                        ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                                        : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                                }
                            >
                                Inscribete
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

