import { ContainerCardSkeleton } from "@/components/skeletons";
import React from "react";

export default function Prueba() {
	return (
		<section className="grow">
			<div className="flex flex-col gap-4 h-full p-0 md:px-10 md:pb-10 pt-24">
				<ContainerCardSkeleton />
			</div>
		</section>
	);
}
