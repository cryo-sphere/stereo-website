import { Resizable } from "re-resizable";
import React from "react";

export const PlayerBar: React.FC = () => {
	return (
		<Resizable
			className="webplayer-bar playerbar"
			defaultSize={{
				width: 200,
				height: "calc(100vh - 100px)"
			}}
			enable={{
				left: true
			}}
		>
			hello
		</Resizable>
	);
};
