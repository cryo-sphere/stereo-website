import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
	return (
		<>
			<Head>
				<title>404 - Not Found</title>
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
