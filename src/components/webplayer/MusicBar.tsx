import React from "react";
import Image from "next/image";
import { Tippy } from "../Tippy";

export const MusicBar: React.FC = () => {
	return (
		<div className="musicbar">
			<Tippy content="Open in browser">
				<a href="https://youtube.com/watch?v=C4mBfkNVnEk" target="_blank" rel="noreferrer" className="musicbar-song-info">
					<Image alt="song image" src="https://img.youtube.com/vi/C4mBfkNVnEk/default.jpg" width={66.7} height={50} />
					<div className="musicbar-song-text">
						<h3>Placeholder song title</h3>
						<p>Placeholder song source</p>
					</div>
				</a>
			</Tippy>
		</div>
	);
};
