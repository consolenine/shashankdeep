import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
	title: "Shashank Deep - Fullstack Developer",
	description: "Shashank Deep is a fullstack developer with experience in custom web applications",
	keywords: ["full-stack developer", "portfolio", "Laravel", "Next.js", "Django", "software engineering"],
	authors: [{"name": "Shashank Deep"}],
	metadataBase: new URL("https://www.shashankdeep.com"),
	openGraph: {
		title: 'Shashank Deep - Fullstack Developer',
		description: 'Shashank Deep is a fullstack developer with experience in custom web applications',
		url: 'https://www.shashankdeep.com',
		siteName: 'Shashank Deep',
		images: [
			{
			url: 'https://www.shashankdeep.com/images/Ellipse-1.png', // Must be an absolute URL
			width: 800,
			height: 600,
			},
			{
			url: 'https://www.shashankdeep.com/images/Ellipse-1.png', // Must be an absolute URL
			width: 1800,
			height: 1600,
			alt: 'Author',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

};

export default function RootLayout({
	children,
	}: Readonly<{
	children: React.ReactNode;
	}>) {

	return (
		<html lang="en">
		<body>{children}</body>
		<GoogleAnalytics gaId="G-DWEDY3RN2W" />
		</html>
	);
}
