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
