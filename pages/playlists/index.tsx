import { Playlist as PlaylistType, User } from "../../types";
import Playlist from "../../components/playlist";
import Head from "next/head";
import React from "react";
import Unauthorized from "../../components/unauthorized";

export const getServerSideProps = async () => {
	const playlists: PlaylistType[] = [
		{ name: "test", id: "1", songs: ["https://www.youtube.com/watch?v=Ij8bRn7ZH3w&pp=sAQA"] },
		{ name: "test 2", id: "3", songs: ["https://www.youtube.com/watch?v=Ij8bRn7ZH3w&pp=sAQA"] },
		{ name: "test 3", id: "2", songs: ["https://www.youtube.com/watch?v=Ij8bRn7ZH3w&pp=sAQA"] },
	];

	return {
		props: {
			playlists,
		},
	};
};

const PlaylistLanding: React.FC<{
	user: User | null;
	loading: boolean;
	playlists: PlaylistType[];
}> = ({ user, loading, playlists }) => {
	return !user && !loading ? (
		<Unauthorized />
	) : (
		<>
			<Head>
				<title>Stereo - Playlists</title>
			</Head>
			<main className="background-full">
				<div className="playlists-top">
					<h1 className="playlists-title">Your Playlists</h1>
				</div>
				<div className="playlists-selection">
					{playlists.map((playlist, i, arr) => (
						<Playlist
							key={i}
							id={playlist.id}
							number={i + 1}
							name={playlist.name}
							last={arr.reverse()[0].id === playlist.id}
						/>
					))}
				</div>
			</main>
		</>
	);
};

export default PlaylistLanding;
