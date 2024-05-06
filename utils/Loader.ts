"use client";
import { ImageLoader } from "next/image";

type props = {
	src: string;
	width?: number;
	quality?: number;
};

export const imageLoader: ImageLoader = ({ src, width, quality }: props) => {
	return `${src}?w=${width || 600}&q=${quality || 75}`;
};
