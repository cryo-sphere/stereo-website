import Head from "next/head";
import React from "react";
import UserCard from "../components/userCard";
import contributors from "../contributors.json";

const NotFound: React.FC = () => {
	return (
		<>
			<Head>
				<title>Stereo - contributors</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - Contributors" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/contributors" />
				<meta
					property="og:description"
					content="Stereo is created by a couple of wonderfull people, check them out here!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<div className="contributors background">
				<div className="contributors-text">
					<h1>contributors</h1>
					<div>
						<p>
							Stereo is a free to use Discord bot. It&apos;s created by the wonderful people below.
							DaanGamesDG is the only developer of this Discord bot. Thanks to the awesome community
							and staff team, he was able to make it a public bot that supports multiple languages!
						</p>
						<p style={{ marginTop: "1rem" }}>
							Below you will find all the users who contributed to one of our projects
						</p>
					</div>
					<div className="contributors__text-emoji">
						<h3>Emoji info</h3>
						<div className="contributors__emoji-items">
							<p>💻 = developer</p>
							<p>💼 = management team</p>
							<p>🎨 = Logo Designer</p>
							<p>💡 = Brainstormer</p>
							<p>📖 = proof reader</p>
							<p>🔡 = translator</p>
						</div>
					</div>
				</div>
				<div className="contributors-users">
					{contributors.map((user, i) => (
						<UserCard key={i} username={user.username} img={user.image} roles={user.roles} />
					))}
				</div>
			</div>
		</>
	);
};

export default NotFound;
