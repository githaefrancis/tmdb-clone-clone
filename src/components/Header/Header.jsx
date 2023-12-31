import React from "react";
import Link from "next/link";
import {AiFillHome} from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import PageLinks from "./PageLinks";
import PageMode from "./PageMode";

const Header =()=>{
    return (
        <header className="flex justify-between items-center p-6 max-w-6xl m-auto">
            <div className="flex">
                <PageLinks url="/" title="home" Icon={AiFillHome} />
                <PageLinks url="/about" title="about" Icon={BsInfoCircleFill} />

            </div>
            <div className="flex items-center space-x-4">
                <PageMode />
                <Link href="/">
                    <h2>
                        <span className="text-2xl bg-cyan-500 px-2 py-1 rounded-lg text-white font-bold mr-1">
                            IMDb
                        </span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </header>
    )
}

export default Header;