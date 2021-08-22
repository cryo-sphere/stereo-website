import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
	return (
		<>
			<Head>
				<title>404 - Not Found</title>
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
			<div className="notFound-container background">
				<div className="notFound">
					<img src="/assets/broken-jukebox.png" alt="" />
					<p>It looks like you broke something</p>
					<p>Don&apos;t worry, we will fix it for you</p>
					<Link href="/">
						<a>
							<i className="fas fa-home" />
							Home
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;
