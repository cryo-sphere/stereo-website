/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.stereo-bot.tk", "static.daangamesdg.xyz", "cdn.discordapp.com", "img.youtube.com", "api.stereo-bot.tk"]
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		localeDetection: true
	}
};
