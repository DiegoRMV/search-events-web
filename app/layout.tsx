import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: 'GX Events | %s',
		default: 'GX Events',
	  },
	description: "Page to search for events",
	icons: {
		icon: ["/favicon.ico?v=4"],
		apple: ["/apple-touch-icon.png?v=4"],
		shortcut: ["/apple-touch-icon.png"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={`${inter.className} 2xl:container mx-auto relative`}>
				<Header />
				<Providers>
					<main className="min-h-[680px] flex bg-dark1">{children}</main>
				</Providers>
				<Footer />
			</body>
		</html>
	);
}
