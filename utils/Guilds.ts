import { store } from "react-notifications-component";
import { ApiUserGuilds, Guild, GuildConfig } from "../types";
import { getApi, getHeaders } from ".";
import axios from "axios";

export const getIcon = (options: {
	id: string;
	hash: string | null;
	type?: "webp" | "png" | "jpg" | "jpeg" | "gif";
	size?: 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
}): string => {
	options = { type: "png", size: 512, ...options };

	return options.hash
		? `https://cdn.discordapp.com/icons/${options.id}/${options.hash}.${options.type}?size=${options.size}`
		: `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 5)}.png`;
};

export const getGuilds = async (): Promise<ApiUserGuilds | null> => {
	try {
		const res = await axios.get<ApiUserGuilds>(getApi() + "/api/guilds", getHeaders(true));

		return res.data ?? null;
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to retrieve your server list",
			type: "danger",
			dismiss: {
				duration: 5e3,
				showIcon: true,
				pauseOnHover: true,
				onScreen: true,
			},
		});

		return null;
	}
};

export const getGuild = async (guildId: string, second = false): Promise<Guild | null> => {
	try {
		const res = await axios.get<Guild>(
			getApi(second ? 2 : 1) + `/api/guild?guildId=${guildId}`,
			getHeaders(true)
		);

		return res.data ?? null;
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to retrieve your server list",
			type: "danger",
			dismiss: {
				duration: 5e3,
				showIcon: true,
				pauseOnHover: true,
				onScreen: true,
			},
		});

		return null;
	}
};

export const updateGuild = async (
	guildId: string,
	body: GuildConfig,
	second = false
): Promise<Guild | null> => {
	try {
		const res = await axios.post(
			getApi(second ? 2 : 1) + "/api/guild/update",
			{ data: body, guildId },
			getHeaders(true)
		);

		return res.data ?? null;
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to retrieve your server list",
			type: "danger",
			dismiss: {
				duration: 5e3,
				showIcon: true,
				pauseOnHover: true,
				onScreen: true,
			},
		});

		return null;
	}
};
