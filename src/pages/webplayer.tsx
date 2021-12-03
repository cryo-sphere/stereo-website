import type { NextPage } from "next";
import React from "react";
import { Filterbar, MusicBar } from "../components";

const Webplayer: NextPage = () => {
	return (
		<main className="webplayer">
			<Filterbar />
			<MusicBar />
		</main>
	);
};

export default Webplayer;
