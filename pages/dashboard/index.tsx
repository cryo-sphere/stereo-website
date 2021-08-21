import Unauthorized from "../../components/unauthorized";
import { ApiUserGuilds, User } from "../../types";
import { getGuilds, getIcon } from "../../utils/Guilds";
import Guild from "../../components/guild";
import Loader from "react-loader-spinner";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC<{ user: User | null; loading: boolean }> = ({ user, loading }) => {
	const [guilds, setGuilds] = useState<ApiUserGuilds | null>();

	useEffect(() => {
		const fn = async () => {
			const res2 = await getGuilds();
			if (res2) setGuilds(res2);
		};

		fn();
	}, []);

	return !user && !loading ? (
		<Unauthorized />
	) : (
		<>
			<Head>
				<title>Stereo - Servers</title>
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
											type: g.icon.startsWith("a_") ? "gif" : "png",
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
											type: g.icon.startsWith("a_") ? "gif" : "png",
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
						<Loader type="ThreeDots" color="#fff" height={80} width={80} />
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
