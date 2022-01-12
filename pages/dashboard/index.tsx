import Unauthorized from "../../components/unauthorized";
import { ApiUserGuilds, User } from "../../types";
import { getGuilds, getIcon } from "../../utils/Guilds";
import Guild from "../../components/guild";
import { ThreeDots } from "react-loader-spinner";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard: React.FC<{ user: User | null; loading: boolean }> = ({ user, loading }) => {
	const [guilds, setGuilds] = useState<ApiUserGuilds | null>();

	useEffect(() => {
		const { token, cancel } = axios.CancelToken.source();
		getGuilds(token).then((data) => {
			if (data) setGuilds(data);
		});

		return () => cancel("cancelled");
	}, []);

	return !user && !loading ? (
		<Unauthorized />
	) : (
		<>
			<Head>
				<title>Stereo - Servers</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - Dashboard" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/dashboard" />
				<meta
					property="og:description"
					content="Stereo comes with an easy-to-use dashboard. Here you can edit the settings from both Stereo 1 and 2!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<div className="background-full guilds-wrapper">
				<div className="guilds-container">
					<p style={{ textAlign: "center" }}>
						Don&apos;t see your server listed here? Refresh the page or re-authorize!
					</p>
					{guilds ? (
						[...guilds.invited, ...guilds.guilds].length > 0 ? (
							<>
								{guilds.invited.map((g) => (
									<Guild
										icon={getIcon({
											id: g.id,
											hash: g.icon,
											type: g.icon?.startsWith("a_") ? "gif" : "png",
											size: 512,
										})}
										id={g.id}
										name={g.name}
										invited
										key={g.id}
									/>
								))}
								{guilds.guilds.map((g) => (
									<Guild
										icon={getIcon({
											id: g.id,
											hash: g.icon,
											type: g.icon?.startsWith("a_") ? "gif" : "png",
											size: 512,
										})}
										id={g.id}
										name={g.name}
										key={g.id}
									/>
								))}
							</>
						) : (
							<p>Looks like you got an empty list, create a server on Discord to get started!</p>
						)
					) : (
						<ThreeDots color="#fff" height={80} width={80} />
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
