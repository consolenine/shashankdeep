import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section className="w-full">
					<div className="container mx-auto mr-[20%] pt-64 flex justify-end">
						<div className="w-full md:w-2/5 text-end">
							<h4 className="text-4xl">SHASHANK DEEP&apos;S</h4>
							<h2 className="text-7xl text-poppins tracking-widest">Portfolio</h2>
						</div>
					</div>
				</section>
			</main>	
		</>
	);
}
