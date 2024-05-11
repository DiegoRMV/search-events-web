export function CardSkeleton() {
	return (
		<div className="w-full md:w-1/2 xl:w-1/3 py-4 md:p-4 animate-pulse">
			<div className="p-6 rounded-lg bg-black">
				<div className="h-60 rounded w-full object-cover object-center mb-6 bg-gray-200"></div>
				<div className="h-14 bg-gray-200 rounded w-2/3"></div>
				<div className="mt-2 h-4 bg-gray-200 rounded w-2/3"></div>
				<div className="w-full flex justify-end mt-3">
					<div className="bg-gray-200 rounded px-2 py-1 flex items-center h-8 w-32"></div>
				</div>
			</div>
		</div>
	);
}

export function ContainerCardSkeleton() {
	return (
		<div className="flex justify-center w-full">
			<div className="w-full flex sm:hidden">
				<CardSkeleton />
			</div>
			<div className="w-full hidden sm:flex lg:hidden">
				<CardSkeleton />
				<CardSkeleton />
			</div>
			<div className="w-full hidden lg:flex">
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
			</div>
		</div>
	);
}
