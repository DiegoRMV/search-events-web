import { fetchEventsPages } from "@/lib/data";
import SearchForm from "@/components/SearchForm";
import ContainerCards from "@/components/ContainerCards";
import PaginationEvents from "@/components/PaginationEvents";
import { Metadata } from "next";
import { Suspense } from "react";
import { ContainerCardSkeleton } from "@/components/skeletons";

export const metadata: Metadata = {
	title: "Search",
};

export default async function SearchEvents({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = (await fetchEventsPages(query)) || 0;

	return (
		<section className="grow">
			<div className="flex flex-col gap-4 h-full p-0 md:px-10 md:pb-10 pt-24">
				<SearchForm />
				<Suspense key={query + currentPage} fallback={<ContainerCardSkeleton />}>
					<ContainerCards query={query} currentPage={currentPage} />
				</Suspense>
				<PaginationEvents totalPages={totalPages} />
			</div>
		</section>
	);
}
