import { discordServer } from "../config";
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Discord: React.FC = () => {
	useEffect(() => window.location.replace(discordServer), []);

	return (
		<>
			<Head>
				<title>301 - Redirecting to Discord</title>
			</Head>
			<div className="redirect-container background">
				<div className="redirect">
					<p>We are redirecting you to Discord</p>
					<p>If this is not done automatically, press the button below</p>
					<Link href={discordServer}>
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

export default Discord;
