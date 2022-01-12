import { Playlists as PlaylistsType, User } from "../../types";
import Playlist from "../../components/playlist";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Unauthorized from "../../components/unauthorized";
import { ThreeDots } from "react-loader-spinner";
import { createPlaylist, getPlaylists } from "../../utils/Playlists";
import { uniqueNamesGenerator, animals, adjectives, colors } from "unique-names-generator";
import axios from "axios";

const PlaylistLanding: React.FC<{
	user: User | null;
	loading: boolean;
}> = ({ user, loading }) => {
	const [playlists, setPlaylists] = useState<PlaylistsType | null>();
	const [creating, setCreating] = useState(false);

	useEffect(() => {
		const { token, cancel } = axios.CancelToken.source();
		getPlaylists(token).then((data) => setPlaylists(data));

		return () => cancel("cancelled");
	}, []);

	const create = async () => {
		setCreating(true);
		const name = uniqueNamesGenerator({
			dictionaries: [adjectives, colors, animals],
			separator: " ",
			length: 3,
		}).slice(0, 32);

		const id = await createPlaylist(name);
		if (id) window.location.href = `/playlists/${id}`;
		else setCreating(false);
	};

	return !user && !loading ? (
		<Unauthorized />
	) : (
		<>
			<Head>
				<title>Stereo - Playlists</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - playlists" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/playlists" />
				<meta
					property="og:description"
					content="Stereo has custom playlists, you can have up to 100 playlists with 100 songs each. It doesn't matter which link you provide, as long as it's playable!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			{creating ? (
				<div style={{ width: "100vw", height: "100vh", display: "grid", placeItems: "center" }}>
					<ThreeDots color="#fff" height={120} width={120} />
				</div>
			) : (
				<main className="background-full" style={{ paddingBottom: "2rem" }}>
					<div className="playlists-top">
						<h1 className="playlists-title">Your Playlists</h1>
					</div>
					<div className="playlists-selection">
						<p className="playlist__selection-create" onClick={create}>
							Create new playlist
						</p>
						{playlists ? (
							playlists.map((playlist, i) => (
								<Playlist
									key={i}
									id={playlist.id}
									number={i + 1}
									name={playlist.name}
									last={i + 1 >= playlists.length}
								/>
							))
						) : (
							<ThreeDots color="#fff" height={120} width={120} />
						)}
					</div>
				</main>
			)}
		</>
	);
};

export default PlaylistLanding;
