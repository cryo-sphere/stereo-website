import { github } from "../config";
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Github: React.FC = () => {
	useEffect(() => window.location.replace(github), []);

	return (
		<>
			<Head>
				<title>301 - Redirecting to Github</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - Github" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/github" />
				<meta
					property="og:description"
					content="Everything is open-source, all repositories you find on our GitHub are licensed under the MIT license."
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<div className="redirect-container background">
				<div className="redirect">
					<p>We are redirecting you to Github</p>
					<p>If this is not done automatically, press the button below</p>
					<Link href={github}>
						<a>
							<i className="fab fa-discord" />
							To Discord
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Github;
