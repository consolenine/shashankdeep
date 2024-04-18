"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { Tooltip } from "@material-tailwind/react";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section id="hero" className="w-full border-b-2 border-darkgrey pb-20 md:pb-40">
					<Image className="absolute mt-10 w-full md:w-1/2 lg:w-[700] md:mt-20 -z-10" src="/images/waveform-1.png" alt="WaveForm" width={700} height={450} priority></Image>
					<div className="container px-3 mx-auto mr-[20%] pt-64 flex flex-col justify-center">
						<div className="relative flex flex-col gap-3 w-full items-end before:content-[''] before:hidden md:before:block before:absolute before:h-28 before:w-0.5 before:top-[-80%] before:bg-darkgrey">
							<h4 className="text-4xl">SHASHANK DEEP&apos;S</h4>
							<h2 className="text-7xl text-poppins tracking-widest">Portfolio</h2>
							<ul className="flex gap-3 w-fit">
								<Tooltip content="shashank.deep01@gmail.com" placement="bottom">
									<a href="mailto:shashank.deep01@gmail.com">
										<Image src="/images/mail.svg" alt="E-Mail" height={48} width={48}></Image>
									</a>
								</Tooltip>
								<Tooltip content="+91 9696844764" placement="bottom">
									<a href="tel:+919696844764">
										<Image src="/images/phone.svg" alt="Phone" height={48} width={48}></Image>
									</a>
								</Tooltip>
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-center gap-10 mt-20">
						<button className="px-5 py-4 bg-yellow rounded-xl text-2xl button-55">
							Scroll For More
						</button>
						<div className="flex w-full px-3 md:px-10 lg:pl-20 lg:pr-44 justify-between">
							<h6 className="text-2xl">FULL-STACK DEVELOPER</h6>
							<a href="/documents/ShashankDeep_FullStackDeveloper_Resume_April2024.pdf" target="_blank">
								<button className="px-5 py-4 text-anton text-darkgrey text-4xl flex gap-2 items-center">
									RESUME
									<Image src="/images/arrow-down-circle.svg" alt="Phone" height={48} width={48}></Image>
								</button>
							</a>
						</div>
					</div>
				</section>
				<section id="about" className="mt-24">
					<div className="container px-3 md:px-10 lg:px-20">
						<div className="flex justify-between items-center">
							<h1 className="text-8xl text-anton w-full lg:w-2/3 leading-tight">
								Hi, there! <br></br>
								I enjoy crafting <span className="text-magenta">digital solutions</span> for businesses.
							</h1>
							<Image className="aspect-square max-w-[400px]" src="/images/Ellipse-1.png" layout="responsive" alt="Shashank Deep" width={400} height={400} quality={100}></Image>
						</div>
					</div>
				</section>
				<section id="projects" className="pt-10 h-screen bg-darkgrey">

				</section>
			</main>	
		</>
	);
}
