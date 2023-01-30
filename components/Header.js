import Image from 'next/image';
import React from 'react';
import {MagnifyingGlassIcon, PlusCircleIcon, HomeIcon} from "@heroicons/react/24/outline";

export default function Header() {
    return <div>
        {/* Left */}

        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                    src="/images/Instagram_logo_black.png"
                    fill="true"
                    alt="instagram logo"
                    object-fit="contain"
                    className="object-contain"
                />
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image
                    src="/images/Instagram_logo_2016.svg.webp"
                    fill="true"
                    alt="instagram logo"
                    object-fit="contain"
                    className="object-contain"
                />
            </div>
            <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                    <MagnifyingGlassIcon className="h-5 text-gray-500"/>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
                />
            </div>
            <div className="flex space-x-4 items-center">
                <HomeIcon className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
                <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
                <button>Sign in</button>
            </div>
        </div>

    </div>;
}