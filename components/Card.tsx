"use client";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import image from "@/public/images/image-empty.jpg";
import { Event } from "@/lib/definitions";
import { imageLoader } from "@/utils/Loader";
// import Details from "../Details/Details";

export default function Card({ event }: { event: Event }) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			{showMenu ? (
				<div
					className={`fixed left-0 bg-[#181A20] w-full h-[100vh] z-50 transition-all top-0 focus${
						showMenu ? "show" : "hidden"
					}`}
				>
					<div className="flex justify-end">
						<button
							onClick={() => setShowMenu(!showMenu)}
							className="text-6xl p-4"
						>
							<RiCloseLine />
						</button>
					</div>
					{/* <Details event={event} /> */}
				</div>
			) : null}
			<div className={`w-full md:w-1/2 xl:w-1/3 py-4 md:p-4`}>
				<div className="p-6 rounded-lg bg-black">
					<Image
						loader={imageLoader}
						className="h-60 rounded w-full object-cover object-center mb-6"
						src={event.images[0]?.url || image}
						alt="imagen de evento"
						width={200}
						height={200}
					/>
					<h2 className="text-base text-gray-100 font-medium title-font h-14">
						{event?.name || "unnamed"}
					</h2>
					<h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font mb-4">
						CATEGORIA:
						{event?.classifications ? (
							<>
								{event.classifications[0].segment.name}-
								{event.classifications[0].genre.name}
							</>
						) : (
							"undefine"
						)}
					</h3>
					<div className="w-full flex justify-end">
						<Link
							href={event.url}
							className="text-white px-2 py-1 rounded-md flex items-center bg-cyan-600 mt-3 hover:bg-cyan-800"
							target="__blank"
						>
							Learn More
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
