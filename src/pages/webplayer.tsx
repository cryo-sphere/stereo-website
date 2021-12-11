import type { NextPage } from "next";
import React from "react";
import { Filterbar, MusicBar, PlayerBar } from "../components";

const Webplayer: NextPage = () => {
	return (
		<main className="webplayer">
			<Filterbar />
			<MusicBar />
			<PlayerBar />
		</main>
	);
};

export default Webplayer;
