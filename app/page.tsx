"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section className="grow">
			{/* <!-- Content --> */}
			<div className="relative p-4 md:px-10 md:pb-10 pt-24">
				<div className="pt-4">
					<h1 className="text-4xl sm:text-6xl xl:text-8xl uppercase font-extrabold tracking-[10px] ms:tracking-[12px] md:tracking-[16px] lg:tracking-[28px]
					xl:tracking-[35px]  text-white mb-4 relative z-20">
						Des<span className="border-b border-[#ff9d01]">cubre</span>
					</h1>
					<h1 className="text-6xl sm:text-7xl xl:text-8xl uppercase text-white font-extralight tracking-[6px] ms:tracking-[10px] md:tracking-[15px] lg:tracking-[20px] xl:tracking-[28px] mb-4 relative z-20">
						el
					</h1>
					<h1 className="text-6xl sm:text-7xl xl:text-8xl uppercase text-[#ff9d01] font-extralight tracking-[6px] ms:tracking-[10px] md:tracking-[15px] lg:tracking-[20px] xl:tracking-[28px] relative z-20">
						mundo
					</h1>
					<p className="text-gray-200 mt-8 text-sm md:text-base lg:max-w-sm xl:max-w-md relative z-20">
						Lorem Ipsum has been the industrys standard dummy text ever since
						the 1500s
					</p>
				</div>

				
				<div className="lg:absolute right-0 top-0 py-16 w-full lg:w-[58%]">
					<div className="relative" data-carousel="slide">
						<Image
							src="/images/inicio_4.jpg"
							className="object-contain shadow-[0_15px_20px_rgba(0,0,0,0.3)] opacity-70"
							width={1100}
							height={428}
							alt="imagen de evento"
							priority
						/>
						<div className="mt-10 lg:mt-0 flex justify-center lg:absolute left-20 -bottom-8">
							<Link
								href="/search-events"
								className="bg-[#ff9d01] px-6 py-4 z-1 hover:bg-[#aa782e] font-bold text-xl"
							>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
