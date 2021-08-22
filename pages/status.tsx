import React, { useEffect } from "react";
import { statusPage } from "../config";
import Head from "next/head";
import Link from "next/link";

const Discord: React.FC = () => {
	useEffect(() => window.location.replace(statusPage), []);

	return (
		<>
			<Head>
				<title>301 - Redirecting to StatusPage</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - status" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://status.stereo-bot.tk" />
				<meta
					property="og:description"
					content="Is Stereo down? You can find your answer here! Is the status still operational? Join our Discord server and contact our management team!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<div className="redirect-container background">
				<div className="redirect">
					<p>We are redirecting you to our StatusPage</p>
					<p>If this is not done automatically, press the button below</p>
					<Link href={statusPage}>
						<a>
							<i className="fas fa-signal" />
							To StatusPage
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Discord;
