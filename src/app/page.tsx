import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="h-full">
				<div className="container mx-auto h-full flex items-center justify-center">
					<h1 className="text-5xl text-center text-anton">COMING SOON</h1>
				</div>
			</main>	
		</>
	);
}
