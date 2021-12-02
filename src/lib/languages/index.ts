import { readdirSync, readFileSync } from "fs";
import { LANGUAGE_DIR } from "..";
import { Logger } from "@daangamesdg/logger";
import { join } from "path";

const logger = new Logger({ name: "LanguageHandler" });

export function getTranslations<T = unknown>(language: string | undefined, file: string): T {
	if (typeof language !== "string") language = "en";

	const languages = readdirSync(LANGUAGE_DIR);
	if (!languages.includes(language)) {
		logger.warn(`[getTranslations]: ${language} is not a valid language, using "en" now`);
		language = "en";
	}

	const files = readdirSync(join(LANGUAGE_DIR, language));
	if (!files.includes(`${file}.json`)) {
		logger.fatal(`[getTranslations]: ${file} is not present in lanuage dir ${language}`);
		throw new Error("Language Error");
	}

	const contents = readFileSync(join(LANGUAGE_DIR, language, `${file}.json`), "utf-8");
	return JSON.parse(contents) as T;
}

export function getAvailableLanguageKeys(): string[] {
	const languages = readdirSync(LANGUAGE_DIR);
	return languages;
}
