import { store } from "react-notifications-component";
import { Playlist, Playlists } from "../types";
import { getApi, getHeaders } from ".";
import axios from "axios";

export const getPlaylists = async (): Promise<Playlists | null> => {
	try {
		const res = await axios.get<Playlists>(getApi() + "/api/playlists", getHeaders(true));

		return res.data ?? null;
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to retrieve your playlists",
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

export const getPlaylist = async (
	id: string
): Promise<{ playlist: Playlist; isOwner: boolean } | null> => {
	try {
		const res = await axios.get<{ playlist: Playlist; isOwner: boolean }>(
			getApi() + `/api/playlist?playlistId=${id}`,
			getHeaders(true)
		);

		return res.data ?? null;
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to retrieve your playlist data",
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

export const updatePlaylist = async (body: {
	playlistId: string;
	songs: string[];
	name: string;
}): Promise<void> => {
	try {
		await axios.post(getApi() + "/api/playlist", body, getHeaders(true));
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to update your playlist",
			type: "danger",
			dismiss: {
				duration: 5e3,
				showIcon: true,
				pauseOnHover: true,
				onScreen: true,
			},
		});
	}
};

export const createPlaylist = async (name: string): Promise<string | null> => {
	try {
		const res = await axios.put(getApi() + "/api/playlist", { name }, getHeaders(true));

		return res.data ?? null;
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to create a new playlist",
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

export const deletePlaylist = async (id: string): Promise<void> => {
	try {
		await axios.delete(getApi() + `/api/playlist?playlistId=${id}`, getHeaders(true));
	} catch (e) {
		store.addNotification({
			container: "bottom-right",
			title: "An unexpected error occured",
			message: "We were unable to delete the playlist",
			type: "danger",
			dismiss: {
				duration: 5e3,
				showIcon: true,
				pauseOnHover: true,
				onScreen: true,
			},
		});
	}
};
