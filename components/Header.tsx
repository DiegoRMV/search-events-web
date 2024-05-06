"use client";
import { useState } from "react";
import logo from "@/public/images/logo.png";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toogleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className="flex fixed top-0 w-full max-w-screen-2xl z-40 bg-black">
			<div className="w-full text-gray-400 py-4 px-6 flex flex-col justify-between ">
				<div className="flex justify-between w-full">
					<button onClick={toogleMenu} className="text-3xl flex md:hidden">
						{showMenu ? <RiCloseLine /> : <RiMenu2Line />}
					</button>
					<Link
						href="/"
						className="hidden md:flex items-center gap-2 cursor-pointer"
					>
						<Image
							className="bg-yellow1 p-1 rounded-full w-9 h-9"
							src={logo}
							alt="logo de pagina"
							width={24}
							height={24}
						/>

						<h2 className="text-yellow2 uppercase font-bold tracking-[2px] text-3xl">
							Gx
							<span className="text-yellow1">Events</span>
						</h2>
					</Link>

					<div className="hidden md:flex">
						<ul className="flex items-center gap-6 text-xl tracking-wide">
							<li>
								<Link href="/" className="hover:text-yellow1 transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/search-events"
									className="hover:text-yellow1 transition-colors"
								>
									Events
								</Link>
							</li>
							<li>
								<Link
									href="/about-us"
									className="hover:text-yellow1 transition-colors"
								>
									About us
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex items-center gap-6 text-xl">
						<Link href="/login" className="bg-yellow-200 rounded-full p-1 text-black hover:bg-yellow1 transition-all hover:scale-105">
							<UserIcon className="h-7 w-7 stroke-2" />
						</Link>
					</div>
				</div>

				{/* Menu burguer*/}

				<div
					className={`flex-col transition-all ${showMenu ? "flex" : "hidden"}`}
				>
					<ul className="flex flex-col justify-center items-center gap-6 text-md py-8">
						<li>
							<a href="/" className="flex items-center cursor-pointer">
								<h2 className="text-yellow2 uppercase font-bold tracking-[2px] text-2xl">
									Gx
									<span className="text-yellow1">Events</span>
								</h2>
							</a>
						</li>
						<li>
							<a href="/" className="hover:text-yellow1 transition-colors">
								Home
							</a>
						</li>
						<li>
							<a
								href="/search-events"
								className="hover:text-yellow1 transition-colors"
							>
								Events
							</a>
						</li>
						<li>
							<a
								href="/about-us"
								className="hover:text-yellow1 transition-colors"
							>
								About us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
