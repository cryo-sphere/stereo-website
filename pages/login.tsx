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
