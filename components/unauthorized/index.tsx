import Head from "next/head";
import Link from "next/link";
import React from "react";

const Unauthorized: React.FC<{ loggedIn?: boolean }> = ({ loggedIn }) => {
	return (
		<>
			<Head>
				<title>401 - Unauthorized</title>
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
