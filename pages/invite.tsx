import { NextPageContext, InferGetServerSidePropsType } from "next";
import React, { useEffect } from "react";
import { invites } from "../config";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = (ctx: NextPageContext) => {
	const invite = invites[Number(ctx.query.type) - 1] ?? null;
	const guildId =
		(Array.isArray(ctx.query.guildId) ? ctx.query.guildId[0] : ctx.query.guildId) ?? null;

	return {
		props: {
			invite,
			guildId,
		},
	};
};

const Invite: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	invite,
	guildId,
}) => {
	useEffect(() => {
		if (invite)
			window.location.replace(
				guildId ? invite + `&guild_id=${guildId}&disable_guild_select=true` : invite
			);
	}, [guildId, invite]);

	return (
		<>
			{invite ? (
				<>
					<Head>
						<title>301 - Redirecting to Invite Page</title>
						<meta property="og:site_name" content="Stereo" />
						<meta property="og:title" content="Stereo - Invite" />
						<meta property="og:type" content="site" />
						<meta property="og:url" content="https://stereo-bot.tk/invite" />
						<meta
							property="og:description"
							content="Invite Stereo now and profit from all the free features bots like Groovy and Rythm don't have with their free version!!"
						/>
						<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
					</Head>
					<div className="redirect-container background">
						<div className="redirect">
							<p>We are redirecting you to the invite page</p>
							<p>If this is not done automatically, press the button below</p>
							<Link href={guildId ? invite + `&guild_id=${guildId}` : invite}>
								<a>
									<i className="fas fa-robot" />
									To Invite Page
								</a>
							</Link>
						</div>
					</div>
				</>
			) : (
				<>
					<Head>
						<title>Stereo - Invite Page</title>
						<meta property="og:site_name" content="Stereo" />
						<meta property="og:title" content="Stereo - Invite" />
						<meta property="og:type" content="site" />
						<meta property="og:url" content="https://stereo-bot.tk/invite" />
						<meta
							property="og:description"
							content="Invite Stereo now and profit from all the free features bots like Groovy and Rythm don't have with their free version!!"
						/>
						<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
					</Head>
					<div className="redirect-container background">
						<div className="redirect">
							<p>Which bot do you want to add to your server?</p>
							<div className="invite-buttons">
								<Link href={invites[0]}>
									<a>
										<i className="fas fa-robot" />
										Stereo
									</a>
								</Link>
								<Link href={invites[1]}>
									<a>
										<i className="fas fa-robot" />
										Stereo 2
									</a>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Invite;
