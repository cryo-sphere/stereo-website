import { User, Guild } from "../../types";
import Unauthorized from "../../components/unauthorized";
import Settings from "../../components/settings";
import { getGuild } from "../../utils/Guilds";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useRouter } from "next/dist/client/router";
import NotFound from "../404";

const Dashboard: React.FC<{
	user: User | null;
	loading: boolean;
}> = ({ user, loading }) => {
	const [guild, setGuild] = useState<Guild | null | undefined>(undefined);
	const [guild2, setGuild2] = useState<Guild | null | undefined>(undefined);
	const [active, setActive] = useState<Guild | null>(null);
	const [page, setPage] = useState("stereo");

	const { query } = useRouter();
	useEffect(() => {
		const load = async () => {
			const id = Array.isArray(query.id) ? query.id[0] : query.id ?? "";

			const g = await getGuild(id);
			if (g) setActive(g);
			setGuild(g);

			const g2 = await getGuild(id, true);
			setGuild2(g2);
		};

		load();
	}, [query]);

	const onClick = () => {
		setPage("stereo");
		setActive(guild!);
	};

	const onClick2 = guild2
		? () => {
				setPage("stereo2");
				setActive({ ...guild2, partner: true });
		  }
		: onClick;

	if (!loading && !user) return <Unauthorized />;

	if (guild === undefined)
		return (
			<div style={{ minHeight: "100vh", minWidth: "100vw", display: "grid", placeItems: "center" }}>
				<Loader type="ThreeDots" color="#fff" height={80} width={80} />
			</div>
		);

	if (active === null) return <NotFound />;
	return (
		<Settings guild={active} onClick1={onClick} onClick2={onClick2} active={page} both={!!guild2} />
	);
};

export default Dashboard;
