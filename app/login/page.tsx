import { imageLoader } from "@/utils/Loader";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { CardSkeleton } from "@/components/skeletons";

export const metadata: Metadata = {
	title: "Login",
};

export default function Login() {
	return (
		<section className="flex justify-center w-full">
			<div className="py-28">
				<article className="flex flex-col-reverse md:flex-row bg-emerald-500 rounded-lg overflow-hidden gap-8 md:gap-0">
					<Image
						loader={imageLoader}
						className="object-contain"
						src="https://i.pinimg.com/736x/9d/00/4c/9d004c40630c28c54e1bc37d10b35657.jpg"
						width={400}
						height={400}
						alt="imagen de perfil"
						priority
					/>

					<div className="w-96">
						<h1 className="text-center text-5xl py-8 font-bold">Login</h1>
						<form action="" className="flex flex-col gap-8 p-4">
							<input
								type="text"
								placeholder="Email"
								className="block p-3 text-lg rounded-xl bg-black"
							/>
							<input
								type="text"
								placeholder="Password"
								className="block p-3 text-lg rounded-xl bg-black"
							/>
							<button className="bg-yellow-400 p-2 text-xl text-black font-semibold uppercase tracking-[6px] hover:translate-x-[0.1rem] hover:-translate-y-[0.1rem] hover:shadow-[-3px_3px_0px_0px_#000] transition-all">
								Login
							</button>
						</form>
					</div>
				</article>
			</div>
		</section>
	);
}
