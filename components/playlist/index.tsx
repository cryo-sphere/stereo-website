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
				<div className="playlist-item">
					<p className="playlist__item-number">{number}</p>
					<p className="playlist__item-title">{name}</p>
				</div>
			</Link>
			{!last && <div className="playlist__item-breakline" />}
		</>
	);
};

export default Playlist;
