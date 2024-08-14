"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import Script from "next/script";
import { Tooltip } from "@material-tailwind/react";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SkillBlock from "./components/SkillBlock";
import Marquee from "react-fast-marquee";

export default function Home() {

	return (
		<>
			<Navbar />
			<main>
				<section id="hero" className="w-full border-b-2 border-darkgrey pb-20 md:pb-40 overflow-hidden">
					<Image className="absolute mt-10 w-full md:w-1/2 lg:w-[700] md:mt-20 -z-10" src="/images/waveform.gif" alt="WaveForm" width={904} height={429} priority></Image>
					<div className="container px-3 mx-auto mr-[20%] pt-64 flex flex-col justify-center">
						<div className="relative flex flex-col gap-3 w-full items-center sm:items-end before:content-[''] before:hidden md:before:block before:absolute before:h-28 before:w-0.5 before:top-[-80%] before:bg-darkgrey animate__animated animate__fadeInDown animate__slow">
							<h4 className="text-4xl">SHASHANK DEEP&apos;S</h4>
							<h2 className="text-4xl sm:text-7xl text-poppins tracking-widest">Portfolio</h2>
							<ul className="flex gap-3 w-fit">
								<Tooltip content="shashank.deep01@gmail.com" placement="bottom">
									<a href="mailto:shashank.deep01@gmail.com">
										<Image src="/images/mail.svg" alt="E-Mail" height={48} width={48}></Image>
									</a>
								</Tooltip>
								{/* <Tooltip content="+91 9696844764" placement="bottom">
									<a href="tel:+919696844764">
										<Image src="/images/phone.svg" alt="Phone" height={48} width={48}></Image>
									</a>
								</Tooltip> */}
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-center gap-10 mt-20">
						<button className="p-3 md:px-5 md:py-4 bg-yellow rounded-xl text-l md:text-2xl button-55 animate__animated animate__zoomIn animate__delay-1s animate__slow">
							Scroll For More
						</button>
						<div className="flex w-full px-3 md:px-10 lg:pl-20 lg:pr-44 justify-between">
							<h6 className="max-w-[50%] text-xl md:text-2xl relative before:content-[''] before:hidden md:before:block before:absolute before:h-48 before:w-0.5 before:bottom-[-10rem] before:bg-darkgrey animate__animated animate__fadeInUp animate__slow">FULL-STACK DEVELOPER</h6>
							<a href="/documents/Shshnk_Deep_Software_Developer_Resume_August_2024.pdf" target="_blank">
								<div className="md:py-4 text-anton text-darkgrey text-2xl md:text-4xl flex gap-2 items-center relative before:content-[''] before:hidden md:before:block before:absolute before:w-44 before:h-0.5 before:right-[-11rem] before:bg-darkgrey animate__animated animate__fadeInRight animate__slow">
									RESUME
									<Image src="/images/arrow-down-circle.svg" className="w-[24px] md:w-[48px]" alt="Phone" height={48} width={48}></Image>
								</div>
							</a>
						</div>
					</div>
				</section>
				<section id="about" className="mt-16 sm:mt-24 pb-10">
					<div className="container px-3 md:px-10 lg:px-20">
						<div className="flex flex-col sm:flex-row justify-between items-center">
							<h1 className="text-center md:text-start text-4xl sm:text-4xl lg:text-8xl text-anton w-full lg:w-2/3 leading-tight">
								Hi, there! <br className="hidden md:block"></br>
								I enjoy crafting <span className="text-magenta">digital solutions</span> for businesses.
							</h1>
							<Image className="aspect-square max-w-[200px] lg:max-w-[400px]" src="/images/Ellipse-1.png" alt="Shashank Deep" width={400} height={400} quality={100}></Image>
						</div>
						
					</div>
				</section>
				<section id="projects" className="py-10 bg-darkgrey overflow-hidden">
					<div className="flex container mx-auto px-3 gap-4 items-start">
						<div className="flex flex-col pt-10 md:pt-20 pb-6 px-8 bg-wheat rounded-xl">
							<h3 className="pb-10 md:pb-20 text-center text-anton text-darkgrey text-4xl sm:text-4xl lg:text-8xl">Projects</h3>
							<hr className="border-t-2 border-darkgrey" />
							<p className="text-anton text-darkgrey text-xl pt-2">
								E-commerce, SaaS, website automations? I got it! 
								<Image className="aspect-square inline" src="/images/arrow-down-right.svg" alt="arrow-right" width={36} height={36} quality={100}></Image>
							</p>
						</div>
						<div className="hidden md:flex flex-col gap-2">
							<Image className="rounded-lg" src="/images/artwork_1.png" alt="Shashank Deep" width={376} height={376} quality={100}></Image>
							<div className="cursor-pointer flex flex-col p-6 bg-dullgreen rounded-xl">
								<p className="text-poppins text-wheat text-xl">
									I make Art sometimes. &nbsp;
									<Image className="aspect-square inline" src="/images/mouse-pointer.svg" alt="mouse-pointer" width={24} height={24} quality={100}></Image>
								</p>
							</div>
						</div>
						<div className="hidden lg:flex flex-col p-6 bg-wheat rounded-xl max-w-[24%] text-poppins text-darkgrey cursor-pointer">
							<p className="text-poppins text-xl font-bold text-start"><strong>Working With Dynamic Websites Using Selenium and Python?</strong></p>
							<p className="font-mono text-xl pb-6">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit...
							</p>
							<hr className="border-t-2 border-darkgrey" />
							<p className="text-anton text-xl pt-2">
								Read My Blog
								<Image className="aspect-square inline" src="/images/arrow-up-right.svg" alt="arrow-right" width={36} height={36} quality={100}></Image>
							</p>
						</div>
					</div>
					<ProjectsCarousel />
				</section>
				<section id="skills" className="py-10 bg-darkgrey overflow-hidden">
					<div className="container px-3 mx-auto flex flex-col gap-6 md:gap-16">
						<h3 className="text-center md:text-start text-4xl sm:text-4xl lg:text-8xl text-wheat text-poppins w-full lg:w-2/3 leading-tight">
							<span className="text-anton">Skills</span><br className="hidden md:inline-block"></br> I have
						</h3>
						<SkillBlock 
							heading="Frameworks"
							skills={["#Laravel", "#WordPress", "#NextJS", "#NodeJS", "#Flask", "#FastAPI", "#ExpressJS", "#Bootstrap", "TailwindCSS"]}
							color="#FFC830"
						/>
						<SkillBlock 
							heading="Languages"
							skills={["#PHP", "#Python", "#C++", "#MySQL", "#JavaScript", "#TypeScript", "#HTML", "#XML", "JSON", "#Sass", "#CSS"]}
							color="#57F5E2"
						/>
						<SkillBlock 
							heading="DevOps"
							skills={["#Git", "#GitHub", "#Docker", "#Postman"]}
							color="#CA86FF"
						/>
						<SkillBlock 
							heading="Others"
							skills={["#Data Modelling", "#Agile (Scrum / Kanban)", "#Debugging", "#Test Automation", "#Website Automation", "#Web Scraping", "#Graphic Designing"]}
							color="#89E6C3"
						/>
					</div>
				</section>
				<section id="education" className="mt-16 sm:mt-24 pb-10">
					<div className="container px-3 md:px-10 lg:px-20">
						<div className="flex flex-col gap-4">
							<h3 className="text-center md:text-start text-4xl sm:text-4xl mb-10 lg:text-8xl text-anton w-full lg:w-2/3 leading-tight">
								Education & <br className="hidden md:block"></br>
								<span className="text-magenta">Qualifications</span>
							</h3>
							<div className="flex justify-between md:max-w-[70%] lg:max-w-[50%]">
								<p>
								Bachelor of Science (Hons) in Computer Science <br /> <strong>University of Delhi</strong>
								</p>
								<p>2021-24</p>
							</div>
							<div className="flex justify-between md:max-w-[70%] lg:max-w-[50%]">
								<p>
								Higher Secondary Education <br /> <strong>Army Public School, Nehru Road, Lucknow</strong>
								</p>
								<p>Graduated 2021</p>
							</div>
						</div>
						
					</div>
				</section>
			</main>	
			<footer id="contact">
				<Marquee className="text-anton bg-yellow" style={{letterSpacing: "3.8px"}}>
				{[...Array(10)].map((_, index) => (
					<span className="px-4" key={index}>FREE CONSULTATIONS</span>
				))}
				</Marquee>
				<div className="py-20  bg-darkgrey text-wheat">
					<div className="container mx-auto">
						<div className="flex flex-col lg:flex-row lg:justify-between items-center text-xl">
							<h1 className="text-center md:text-start text-4xl sm:text-4xl mb-10 lg:text-8xl text-anton w-full lg:w-2/3 leading-tight">
								Have something exciting for me?
							</h1>
							<div>
								<h6 className="text-center md:text-end">Contact</h6>
								<ul className="flex flex-col gap-4 mt-4 items-center md:items-end">
									<li><a href="mailto:shashank.deep01@gmail.com">shashank.deep01@gmail.com</a></li>
									{/* <li><a href="tel:+919696844764">+91 9696844764</a></li> */}
								</ul>
							</div>
						</div>
						<div className="flex flex-col-reverse md:flex-row items-center justify-between mt-20">
							<p>Copyright 2024. All rights reserved.</p>
							<a href="/documents/Shshnk_Deep_Software_Developer_Resume_August_2024.pdf" target="_blank">Download Resume</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
