import Head from "next/head";
import Link from "next/link";
import React from "react";

const Unauthorized: React.FC<{ loggedIn?: boolean }> = ({ loggedIn }) => {
	return (
		<>
			<Head>
				<title>401 - Unauthorized</title>
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
			{loggedIn ? (
				<div className="notFound-container background">
					<div className="notFound">
						<img src="/assets/unauthorized.png" alt="" />
						<p>You can only visit this part with a special ticket</p>
						<p>You aren&apos;t allowed to be here, let&apos;s go back</p>
						<Link href="/">
							<a>
								<i className="fas fa-home" />
								Home
							</a>
						</Link>
					</div>
				</div>
			) : (
				<div className="notFound-container background">
					<div className="notFound">
						<img src="/assets/unauthorized.png" alt="" />
						<p>You can only visit the festival with a ticket</p>
						<p>Login to get access to this page</p>
						<Link href="/login">
							<a>
								<i className="fas fa-sign-in-alt" />
								Login
							</a>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default Unauthorized;
