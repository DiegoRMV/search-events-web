import { imageLoader } from "@/utils/Loader";
import Image from "next/image";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutUs() {
	return (
		<section className="grow">
			<div className="flex flex-col justify-center h-full">
				<div className="relative flex grow">
					<div className="bg-[#0c0c0c] w-0 lg:w-1/3"></div>
					<div className="bg-[#161616] w-full lg:w-3/4"></div>
				</div>
				<div className="flex flex-col justify-center lg:absolute p-4 md:px-10 md:pb-10 pt-24">
					<h1 className="text-3xl font-semibold capitalize lg:text-4xl xl:text-5xl text-white">
						Quienes <span className="text-[#b19d3c]">Somos</span>{" "}
					</h1>
					<div className="my-10 lg:mt-12 lg:flex lg:items-center">
						<Image
							loader={imageLoader}
							className="object-cover object-center w-full lg:w-[32rem] rounded-xl h-96 drop-shadow-2xl"
							src="https://img.freepik.com/foto-gratis/toma-interior-hombre-feliz-estudiante-cabello-rizado-vestido-casualmente-sentado-cafeteria-trabajando-tecnologias-modernas-mientras-estudia-mirando-sonrisa-cuaderno-recibiendo-mensaje-amigo_273609-7468.jpg"
							alt="imagen de estudiante"
							width={400}
							height={400}
							priority
						/>
						<div className="mt-8 lg:px-10 lg:mt-0">
							<h1 className="text-2xl font-semibold text-white lg:w-72">
								<span className="text-yellow1">GX </span>EVENTS
							</h1>
							<p className="max-w-lg mt-6 text-gray-400">
								&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Tempore quibusdam ducimus libero ad tempora doloribus expedita
								laborum saepe voluptas perferendis delectus assumenda rerum,
								culpa aperiam dolorum, obcaecati corrupti aspernatur...&quot;
							</p>
							<h3 className="mt-6 text-lg font-medium text-green1">DiegoRMV</h3>
							<p className="text-gray-300">
								<span className="uppercase font-bold">Desarrollo Web</span> en{" "}
								<span className="uppercase font-bold">FrontEnd</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
