import { fetchFilteredEvents } from "@/lib/data";
import Card from "./Card";

type Props = {
	query: string;
	currentPage: string;
};

export default async function ContainerCards({
	query,
	currentPage,
}: {
	query: string;
	currentPage: number;
}) {
	const events = await fetchFilteredEvents(query, currentPage);

	return (
		<div className="grow flex justify-center flex-wrap">
			{events?.map((event) => <Card key={event.id} event={event} />) || (
				<div className="flex h-full w-full justify-center items-center">
					<h1 className="text-white text-xl flex text-center">
						😅 No se encontro resultados...
					</h1>
				</div>
			)}
		</div>
	);
}
