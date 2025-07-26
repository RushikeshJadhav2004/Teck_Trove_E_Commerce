"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "../assets/assets";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <button
        className="cursor-pointer w-28 md:w-32 text-xl font-bold
 "
        onClick={() => router.push("/")}
      >
        {" "}
        <span className="text-orange-600">Tech</span>Trove
      </button>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user ? (
          <>
            {/* Cart Icon */}
            <button
              onClick={() => router.push("/cart")}
              className="relative group"
            >
              <CartIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                3
              </span>{" "}
              {/* Optional count */}
            </button>

            {/* Bag Icon (My Orders) */}
            <button
              onClick={() => router.push("/")}
              className="relative group"
            >
              <HomeIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
            </button>
            <button
              onClick={() => router.push("/my-orders")}
              className="relative group"
            >
              <BagIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
            </button>
            <button
              onClick={() => router.push("/all-products")}
              className="relative group"
            >
              <BoxIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
            </button>
            

            {/* User Profile */}
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
       {user ? (
  <>
    {/* Cart Icon */}
    <button
      onClick={() => router.push('/cart')}
      className="relative group"
    >
      <CartIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
      <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">3</span> {/* Optional count */}
    </button>

    {/* Bag Icon (My Orders) */}
    <button
      onClick={() => router.push('/my-orders')}
      className="relative group"
    >
      <BagIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
    </button>
    <button
              onClick={() => router.push("/")}
              className="relative group"
            >
              <HomeIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
            </button>
    <button
              onClick={() => router.push("/all-products")}
              className="relative group"
            >
              <BoxIcon className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" />
            </button>

    {/* User Profile */}
    <UserButton afterSignOutUrl="/" />
  </>
) : (
  <button
    onClick={openSignIn}
    className="flex items-center gap-2 hover:text-gray-900 transition"
  >
    <Image src={assets.user_icon} alt="user icon" />
    Account
  </button>
)}

      </div>
    </nav>
  );
};

export default Navbar;
