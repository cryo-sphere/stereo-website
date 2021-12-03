import { readdirSync } from "fs";
import { LANGUAGE_DIR } from "..";
import { Logger } from "@daangamesdg/logger";
import * as languages from "../../../languages";

const logger = new Logger({ name: "LanguageHandler" });

export function getTranslations(language: string | undefined) {
	if (typeof language !== "string") language = "en";

	const translations = languages[language as keyof typeof languages];
	if (!translations) {
		logger.warn(`[getTranslations]: ${language} is not a valid language, using "en" now`);
		languages["en" as keyof typeof languages];
	}

	return translations;
}

export function getAvailableLanguageKeys(): string[] {
	const languages = readdirSync(LANGUAGE_DIR);
	return languages;
}
