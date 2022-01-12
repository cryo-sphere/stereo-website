import { User, Guild } from "../../types";
import Unauthorized from "../../components/unauthorized";
import Settings from "../../components/settings";
import { getGuild } from "../../utils/Guilds";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/dist/client/router";
import NotFound from "../404";
import axios from "axios";

const Dashboard: React.FC<{
	user: User | null;
	loading: boolean;
}> = ({ user, loading }) => {
	const [guild, setGuild] = useState<Guild | null | undefined>(undefined);
	const { query } = useRouter();

	useEffect(() => {
		const { token, cancel } = axios.CancelToken.source();
		const id = Array.isArray(query.id) ? query.id[0] : query.id ?? "";
		const bot = Array.isArray(query.bot) ? Number(query.bot[0]) : Number(query.bot) ?? 1;

		getGuild(id, bot === 2, token).then((data) => {
			setGuild(data || null);
		});

		return () => cancel("cancelled");
	}, [query]);

	if (!loading && !user) return <Unauthorized />;

	return guild ? (
		<Settings guild={guild} />
	) : guild === null ? (
		<NotFound />
	) : (
		<div style={{ minHeight: "100vh", minWidth: "100vw", display: "grid", placeItems: "center" }}>
			<ThreeDots color="#fff" height={80} width={80} />
		</div>
	);
};

export default Dashboard;
