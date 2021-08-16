export interface User {
	id: string;
	username: string;
	discriminator: string;
	avatar: string;
	locale: string;
	flags: number;
	premium_type: number;
	public_flags: number;
}

export interface UserGuild {
	id: string;
	name: string;
	icon: string;
	owner: boolean;
	permissions: string;
	features: string[];
}

export interface ApiUserGuilds {
	invited: UserGuild[];
	guilds: UserGuild[];
}

export interface GuildConfig {
	djrole: null;
	language: string;
	defaultvolume: number;
	defaultfilter: string;
	defaultbassboost: string;
	autoshuffle: boolean;
	autorepeat: boolean;
	announce: boolean;
	deleteAnnounce: boolean;
	afk: boolean | null;
}

export interface Role {
	id: string;
	name: string;
	colour: string;
	position: number;
	managed: boolean;
}

export interface Guild {
	icon: string | null;
	partner: boolean;
	name: string;
	id: string;
	roles: Role[];
	config: GuildConfig;
	languages: Language[];
	filters: string[];
	bassboost: string[];
}

export interface Playlist {
	id: string;
	name: string;
	songs: string[];
}

export type Language = { key: string; value: string };
