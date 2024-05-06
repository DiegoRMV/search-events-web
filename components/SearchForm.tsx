"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchForm() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	const handleSearch = (term: string) => {
		console.log(`Searching... ${term}`);
		params.set("page", "1");
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
	};

	const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(params.toString())
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<form>
			<div className="flex flex-wrap justify-between mb-2">
				<div className="w-full sm:w-1/4 md:w-1/3 lg:w-1/2 m-2 sm:mb-0">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
						Events
					</h1>
					<div className="h-1 w-20 bg-indigo-500 rounded"></div>
				</div>
				<div className="grow flex flex-wrap items-center justify-center gap-4 m-2">
					<input
						className="grow rounded-md p-3 text-white bg-black"
						type="text"
						placeholder="busca tu evento..."
						onChange={(e) => handleSearch(e.target.value)}
						defaultValue={searchParams.get("query")?.toString()}
					/>
					<button
						className="bg-indigo-500 hover:bg-indigo-700 rounded-md px-6 py-2 text-white text-base w-full sm:w-auto"
						onClick={(e) => handleOnSubmit(e)}
					>
						Buscar
					</button>
				</div>
			</div>
		</form>
	);
}
