import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Loader from "react-loader-spinner";

const Callback: React.FC = () => {
	const { query, replace } = useRouter();
	const [, setCookie] = useCookies(["STEREO_AUTH"]);

	useEffect(() => {
		const cookie = Array.isArray(query.cookie) ? query.cookie[0] : query.cookie;
		if (cookie) setCookie("STEREO_AUTH", cookie, { domain: `.${document.location.host}` });

		replace("/");
	}, [query]);

	return (
		<>
			<Head>
				<title>Stereo - Logging in...</title>
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
				<div
					style={{ minHeight: "100vh", minWidth: "100vw", display: "grid", placeItems: "center" }}>
					<Loader type="ThreeDots" color="#fff" height={80} width={80} />
				</div>
			</div>
		</>
	);
};

export default Callback;
