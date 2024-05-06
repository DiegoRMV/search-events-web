"use client";
import { imageLoader } from "@/utils/Loader";
import Image from "next/image";
import Link from "next/link";
import github from "/public/svgs/github.svg";
import linkedin from "/public/svgs/linkedin.svg";
import instagram from "/public/svgs/instagram.svg";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function Footer() {
	return (
		<footer className="bg-black w-full p-4 border-t-2 text-gray-400">
			<div className="grid grid-rows-1 gap-8 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
				<div className="md:col-span-4 xl:col-span-1 flex flex-col justify-center gap-4">
					<h2 className="text-[#6d5530] uppercase font-bold tracking-[2px] text-3xl text-center md:text-start">
						Gx
						<span className="text-[#ff9d01]">Events</span>
					</h2>
					<p className="hidden md:block text-justify">
						Lorem Ipsum ha sido el texto de relleno estándar de las industrias
						desde el año 1500, cuando un impresor (N. del T. persona que se
						dedica a la imprenta)
					</p>
				</div>
				<div className="flex justify-center">
					<div>
						<h2 className="font-bold mb-6 uppercase text-white text-center lg:text-left">
							Menu
						</h2>
						<nav className="flex flex-row md:flex-col gap-4 ">
							<Link href="/" className="hover:scale-105 transition-all">
								Home
							</Link>
							<Link href="/events" className="hover:scale-105 transition-all">
								Events
							</Link>
							<Link href="/about-us" className="hover:scale-105 transition-all">
								About us
							</Link>
						</nav>
					</div>
				</div>
				<div className="flex justify-center">
					<div>
						<h2 className="font-bold mb-6 uppercase text-white text-center lg:text-left">
							Redes sociales
						</h2>
						<nav className="flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start">
							<Link
								href="https://www.linkedin.com/in/diego-rub%C3%A9n-menchaca-vera-ba46b9262/"
								className="flex justify-start gap-2 hover:bg-gray-900 p-2 rounded-lg transition-colors"
								target="_blank"
								rel="noreferrer"
							>
								<Image src={linkedin} alt="JT Devs" width={24} height={24} />
								<span className="hidden sm:inline">GX Devs</span>
							</Link>
							<Link
								href="#"
								className="flex items-center gap-2 hover:bg-gray-900 p-2 rounded-lg transition-colors"
								target="_blank"
								rel="noreferrer"
							>
								<Image src={instagram} alt="JT Devs" width={24} height={24} />
								<span className="hidden sm:inline">gxdevsar</span>
							</Link>
							<Link
								href="https://github.com/DiegoRMV"
								className="flex items-center gap-2 hover:bg-gray-900 p-2 rounded-lg transition-colors"
								target="_blank"
								rel="noreferrer"
							>
								<Image src={github} alt="JT Devs" width={24} height={24} />
								<span className="hidden sm:inline">GX Devs</span>
							</Link>
						</nav>
					</div>
				</div>
				<div className="flex justify-center">
					<div>
						<h2 className="font-bold mb-6 uppercase text-white text-center lg:text-left">
							Contacto
						</h2>
						<div className="flex flex-row md:flex-col gap-4 justify-center items-center md:justify-start md:items-start">
							<Link href={"#"} className="flex items-center gap-2 hover:scale-105 transition-all">
								<MapPinIcon className="h-6 w-6 stroke-2 text-white" />
								<span className="hidden sm:inline">Salta, Argentina</span>
							</Link>
							<Link href={"#"} className="flex items-center gap-2 hover:scale-105 transition-all">
								<EnvelopeIcon className="h-6 w-6 stroke-2 text-white" />
								<span className="hidden sm:inline">diegormver@gmail.com</span>
							</Link>
							<Link href={"#"} className="flex items-center gap-2 hover:scale-105 transition-all">
								<DevicePhoneMobileIcon className="h-6 w-6 stroke-2 text-white" />
								<span className="hidden sm:inline">(+54) 387 0 00 00 00</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex flex-col lg:flex-row gap-4 items-center justify-between text-white text-sm md:text-base">
				<p className="text-center md:text-left">
					&copy; 2023
					<span className="text-green1 font-bold"> GX Devs.</span> Todos los
					derechos reservados.
				</p>
				<div className="flex flex-col md:flex-row items-center gap-2">
					<Link href="#" className="hover:text-gray-700 transition-colors">
						Terminos y condiciones
					</Link>
					<span className="hidden md:flex">|</span>
					<Link href="#" className="hover:text-gray-700 transition-colors">
						Política de privacidad
					</Link>
				</div>
			</div>
		</footer>
	);
}
