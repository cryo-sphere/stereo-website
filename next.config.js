/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["https://cdn.stereo-bot.tk/", "https://static.daangamesdg.xyz/", "https://cdn.discordapp.com"]
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		localeDetection: true
	}
};
