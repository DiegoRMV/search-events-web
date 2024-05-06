"use client";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationEvents({
	totalPages,
}: {
	totalPages: number;
}) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const currentPage = Number(searchParams.get("page")) || 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		replace(`${pathname}?${params.toString()}`);
	};
	return (
		<div className="flex flex-shrink mx-auto py-4 m-0">
			{
				<Pagination
					isDisabled={totalPages === 0 ? true : false}
					loop
					showControls
					color="success"
					total={totalPages}
					initialPage={1}
					page={currentPage}
					onChange={(e) => createPageURL(e)}
					size={"sm"}
					siblings={1}
					isCompact
				/>
			}
		</div>
	);
}
