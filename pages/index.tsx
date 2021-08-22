import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const Landing: React.FC = () => {
	const scroll = () => scroller.scrollTo("scroll-target", { smooth: true });

	return (
		<>
			<Head>
				<title>Stereo - The best free Discord music bot</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk" />
				<meta
					property="og:description"
					content="Stereo is the only music bot you will ever need, the best audio quality, filters and more completely free!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<main>
				<div className="landing-top background-full">
					<div className="landing-center">
						<motion.h1
							initial={{ x: -10, opacity: 0 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.5,
									ease: [0.6, -0.05, 0.01, 0.99],
									delay: 0.5,
								},
							}}
							className="landing-title">
							Stereo
						</motion.h1>
						<motion.p
							initial={{ y: 50, opacity: 0 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 2,
									ease: [0.6, -0.05, 0.01, 0.99],
									delay: 0.5,
								},
							}}
							className="landing-text">
							Stereo is the only music bot you will ever need, the best audio quality, filters and
							more completely free!
						</motion.p>
					</div>
					<div className="landing-more-button">
						<motion.p
							onClick={scroll}
							transition={{
								y: {
									duration: 1,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeOut",
								},
							}}
							animate={{
								y: [0, -10],
							}}>
							Learn More
						</motion.p>
						<motion.i
							transition={{
								y: {
									duration: 1,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeOut",
								},
							}}
							animate={{
								y: [0, -10],
							}}
							className="fas fa-sort-down"
						/>
					</div>
					<div style={{ width: "100%" }}>
						<div style={{ width: "100%" }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1440 320"
								className="wave"
								id="scroll-target">
								<path
									fillOpacity="1"
									d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
							</svg>
							<div className="landing-blue">
								<img src="/assets/best-audio-quality.png" alt="" />
								<div className="section-text">
									<p>
										<strong>Don’t like bad audio quality?</strong>
									</p>
									<p>
										Stereo provides the best audio quality for you and your friends to listen
										without problems!
									</p>
								</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
								<path
									fillOpacity="1"
									d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
							</svg>
						</div>
						<div className="landing-black">
							<div className="section-text">
								<p>
									<strong>Hate downtime on your favourite streaming platform?</strong>
								</p>
								<p>
									Then Stereo is the best option! Our bots are online 99% of the time if not 100%!
								</p>
							</div>
							<img src="/assets/uptime.png" alt="" style={{ maxHeight: "400px" }} />
						</div>
						<div style={{ width: "100%" }}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
								<path
									fillOpacity="1"
									d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
							</svg>
							<div className="landing-blue">
								<img src="/assets/jukebox-sketch.png" alt="" />
								<div className="section-text">
									<p>
										<strong>Don’t want to pay to listen to music?</strong>
									</p>
									<p>
										Great! Stereo is free forever and open source as well, You can selfhost or help
										whenever you want on our Github!
									</p>
								</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
								<path
									fillOpacity="1"
									d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
							</svg>
						</div>
						<div className="landing-black">
							<div className="section-text">
								<p>
									<strong>Don’t you YouTube to stream music?</strong>
								</p>
								<p>
									Don’t worry, we got you covered.Stereo supports Spotify, SoundCloud, Deezer and
									YouTube.
								</p>
							</div>
							<img src="/assets/options.png" alt="" />
						</div>
						<div style={{ width: "100%" }}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
								<path
									fillOpacity="1"
									d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
							</svg>
							<div className="landing-blue">
								<img src="/assets/support.png" alt="" />
								<div className="section-text">
									<p>
										<strong>Hate complicated dashboards?</strong>
									</p>
									<p>
										We too! That’s why Stereo is designed to be easy to use, but if you have
										problems or don’t know how something works, our support team is always ready to
										help you.
									</p>
								</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
								<path
									fillOpacity="1"
									d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
							</svg>
						</div>
						<div className="landing-black last">
							<div className="section-text">
								<p className="strong">
									<strong>Now what are you waiting for?</strong>
								</p>
								<p>
									Get Stereo now and take advantage of all the free features you don&apos;t get with
									other bots!
								</p>
								<Link href="/invite" scroll={false}>
									<a className="invite-button">
										<i className="fab fa-discord" />
										Invite
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Landing;
