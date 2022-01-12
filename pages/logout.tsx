import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ThreeDots } from "react-loader-spinner";
import { User } from "../types";
import { getApi } from "../utils";

const NotFound: React.FC<{ loading: boolean; user: User }> = ({ loading, user }) => {
	const { pathname, replace } = useRouter();
	const [, , removeCookies] = useCookies(["STEREO_AUTH"]);
	const [path] = useState(pathname);

	useEffect(() => {
		const fn = async () => {
			await axios.delete(getApi() + "/oauth/logout", { withCredentials: true }).catch(() => void 0);
			if (path === window.location.pathname) {
				removeCookies("STEREO_AUTH");
				replace("/");
			}
		};

		fn();
	}, [loading, user, path]);

	return (
		<>
			<Head>
				<title>Stereo - Landing</title>
			</Head>
			<div className="background" style={{ placeItems: "center", display: "grid" }}>
				<ThreeDots color="#fff" height={120} width={120} />
			</div>
		</>
	);
};

export default NotFound;
