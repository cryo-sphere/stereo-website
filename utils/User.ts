import { store } from "react-notifications-component";
import { getApi, getHeaders } from ".";
import axios, { CancelToken } from "axios";
import { User } from "../types";

export const getAvatar = (options: {
	userId: string;
	discrim: number;
	hash: string | null;
	type?: "webp" | "png" | "jpg" | "jpeg" | "gif";
	size?: 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
}): string => {
	options = { type: "png", size: 512, ...options };

	return options.hash
		? `https://cdn.discordapp.com/avatars/${options.userId}/${options.hash}.${options.type}?size=${options.size}`
		: `https://cdn.discordapp.com/embed/avatars/${options.discrim % 5}.png`;
};

export const formatName = (name: string, discrim: number, len: number): string =>
	name.length + 5 > len
		? `${name.substr(0, len - 5)}...#${discrim.toString().padStart(4, "0")}`
		: `${name}#${discrim.toString().padStart(4, "0")}`;

export const getLogin = () => getApi() + "/oauth/login";

export const getUser = async (token: CancelToken): Promise<User | null> => {
	try {
		const res = await axios.get<User>(getApi() + "/api/user", getHeaders(true, token));

		return res.data
			? {
					...res.data,
					avatar: getAvatar({
						userId: res.data.id,
						hash: res.data.avatar,
						discrim: Number(res.data.discriminator),
						type: res.data.avatar.startsWith("a_") ? "gif" : "png",
					}),
			  }
			: null;
	} catch (e) {
		if (e.message && e.message === "cancelled") return null;

		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to retrieve your data",
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
