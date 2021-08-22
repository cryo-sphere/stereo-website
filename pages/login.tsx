import React, { useEffect } from "react";
import { getLogin } from "../utils/User";
import Head from "next/head";
import Link from "next/link";

const Login: React.FC = () => {
	useEffect(() => window.location.replace(getLogin()), []);

	return (
		<>
			<Head>
				<title>Stereo - Login Page</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - Login" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/login" />
				<meta
					property="og:description"
					content="Stereo comes with an easy-to-use dashboard. Here you can edit the settings from both Stereo 1 and 2!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<div className="redirect-container background">
				<div className="redirect">
					<p>We are redirecting you to the login page</p>
					<p>If this does not happen automatically, press the button below</p>
					<Link href={getLogin()}>
						<a>
							<i className="fas fa-sign-in-alt" />
							To login
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Login;
