import { AxiosRequestConfig } from "axios";
import { apis } from "../config";

export const getApi = (type?: number) =>
	process.env.NODE_ENV === "development" ? "http://localhost:3001" : apis[(type ?? 1) - 1];

export const getHeaders = (creds: boolean): AxiosRequestConfig => ({
	withCredentials: creds,
});
