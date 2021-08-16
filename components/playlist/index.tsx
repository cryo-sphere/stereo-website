import Link from "next/link";
import React from "react";

const Playlist: React.FC<{ number: number; name: string; id: string; last: boolean }> = ({
	number,
	name,
	id,
	last,
}) => {
	return (
		<>
			<Link passHref href={`/playlists/${id}`}>
				<div className="playlist">
					<p className="playlist-number">{number}</p>
					<p className="playlist-title">{name}</p>
				</div>
			</Link>
			{!last && <div className="playlist-breakline" />}
		</>
	);
};

export default Playlist;
