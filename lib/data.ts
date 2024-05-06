import { unstable_noStore as noStore } from "next/cache";
import { RootObject } from "./definitions";

export async function fetchFilteredEvents(query: string, currentPage: number) {
	const env = process.env;
	try {
		const response = await fetch(
			`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${env.NEXT_PUBLIC_TICKETMASTER_API_kEY}&keyword=${query}&page=${currentPage}`
		);
		const data: RootObject = await response.json();
		return data._embedded?.events;
	} catch (error) {
		console.error("Database Events Error:", error);
		throw new Error("Failed to fetch Events.");
	}
}

export async function fetchEventsPages(query: string) {
	const env = process.env;
	try {
		const response = await fetch(
			`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${env.NEXT_PUBLIC_TICKETMASTER_API_kEY}&keyword=${query}`
		);
		const data: RootObject = await response.json();
		return data.page?.totalPages;
	} catch (error) {
		console.error("Database Total Pages Error:", error);
	}
}
