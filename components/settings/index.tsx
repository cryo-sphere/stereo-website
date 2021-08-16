import SaveNotification from "../../components/saveNotification";
import FormikDropdown from "../../components/formikDropdown";
import { Formik, FormikProps, Field, Form } from "formik";
import { Guild, GuildConfig } from "../../types";
import { getIcon, updateGuild } from "../../utils/Guilds";
import Slider from "../../components/Silder";
import Switch from "../../components/Switch";
import Image from "../../components/image";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import * as Yup from "yup";

const Settings: React.FC<{
	guild: Guild;
	active: string;
	both: boolean;
	onClick1: () => void;
	onClick2: () => void;
}> = ({ guild, onClick1, onClick2, active, both }) => {
	const [config, setConfig] = useState(guild.config);

	const updateConfig = async (data: GuildConfig) => {
		setConfig(data);
		await updateGuild(guild.id, data, active === "stereo2");
	};

	const validationSchema = Yup.object({
		djrole: Yup.string()
			.oneOf(
				[...guild.roles.filter((r) => !r.managed).map((r) => r.id), ""],
				"Invalid role provided"
			)
			.notRequired(),
		language: Yup.string()
			.oneOf(
				guild.languages.map((l) => l.value),
				"Invalid language provided"
			)
			.required("Required"),
		defaultfilter: Yup.string().oneOf(guild.filters, "Invalid filter").required("Required"),
		defaultbassboost: Yup.string()
			.oneOf(guild.bassboost, "Invalid bassboost level")
			.required("Required"),
		afk: Yup.boolean()
			.oneOf(guild.partner ? [true, false] : [false], "Partnership is required to enable 24/7")
			.required("Required"),
		announce: Yup.boolean().required("Required"),
		deleteAnnounce: Yup.boolean().required("Required"),
		autoshuffle: Yup.boolean().required("Required"),
		autorepeat: Yup.boolean().required("Required"),
		defaultvolume: Yup.number()
			.min(1, "Default Volume may not be lower than 1")
			.max(200, "Default Volume may not be higher than 200")
			.required("Required"),
	});

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	return (
		<main className="main background-full">
			<Head>
				<title>Stereo - Dashboard</title>
			</Head>
			<div className="dashboard-title">
				<Image
					className="guild-icon dashboard-icon"
					fallback={<div className="guild-icon-fallback dashboard-fallback" />}
					src={getIcon({
						id: guild.id,
						hash: guild.icon,
						type: guild.icon?.startsWith("a_") ? "gif" : "png",
					})}
					alt=""
				/>
				<p className="dashboard-guild-title">{guild.name}</p>
			</div>
			<div className="dashboard-top-buttons">
				<Link href="/dashboard">
					<a className="dashboard-back-button">
						<i className="fas fa-long-arrow-alt-left" /> Back to servers
					</a>
				</Link>
				<div className="bot-selection">
					<p className={active === "stereo" ? "active" : ""} onClick={onClick1}>
						Stereo
					</p>
					<p
						className={active === "stereo2" ? "active" : both ? "" : "disabled"}
						onClick={onClick2}>
						Stereo 2
					</p>
				</div>
			</div>
			<Formik
				onSubmit={updateConfig}
				initialValues={guild.config}
				validationSchema={validationSchema}
				validateOnMount
				enableReinitialize>
				{({ submitForm, resetForm, values, errors, isSubmitting }: FormikProps<GuildConfig>) => (
					<Form>
						{/* Config Section 1 */}
						<div className="dashboard-config" style={{ position: "relative", zIndex: 10 }}>
							<div className="config-section">
								{/* Config 1 Block 1 */}
								<div className="config-block">
									<div className="config-item">
										<p className="config-title">
											<i className="fas fa-globe-europe" /> Language
										</p>
										<p className="config-desc">Set Stereo&apos;s server Language</p>
										<p className="form-error">{errors.language}</p>
										<Field
											component={FormikDropdown}
											placeholder="Select a language"
											name="language"
											id="language"
											options={guild.languages.map((lang) => ({
												label: lang.key,
												value: lang.value,
											}))}
										/>
									</div>
									<div className="config-item">
										<p className="config-title">
											<i className="fas fa-tag" /> DJRole
										</p>
										<p className="config-desc">Set a DJRole (This will enable DJRole mode)</p>
										<p className="form-error">{errors.djrole}</p>
										<Field
											component={FormikDropdown}
											placeholder="Select a DJRole"
											name="djrole"
											id="djrole"
											disabled={guild.roles.filter((r) => r.managed).map((r) => r.id)}
											options={[
												{ label: "no DJRole", value: "" },
												...guild.roles.map((role) => ({
													label: role.name,
													value: role.id,
												})),
											]}
										/>
									</div>
								</div>

								{/* Config 1 Block 2 */}
								<div className="config-block">
									<div className="config-item">
										<p className="config-title">
											<i className="fas fa-headphones-alt" /> Bassboost
										</p>
										<p className="config-desc">Bassboost applied when a new player is created</p>
										<p className="form-error">{errors.defaultbassboost}</p>
										<Field
											component={FormikDropdown}
											placeholder="Select a Bassboost level"
											name="defaultbassboost"
											id="defaultbassboost"
											options={guild.bassboost.map((str) => ({
												label: capitalize(str),
												value: str,
											}))}
										/>
									</div>
									<div className="config-item">
										<p className="config-title">
											<i className="fas fa-filter" /> Filter
										</p>
										<p className="config-desc">Filter applied when a new player is created</p>
										<p className="form-error">{errors.defaultfilter}</p>
										<Field
											component={FormikDropdown}
											placeholder="Select a filter"
											name="defaultfilter"
											id="defaultfilter"
											options={guild.filters.map((str) => ({
												label: capitalize(str),
												value: str,
											}))}
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Config Section 2 */}
						<div className="dashboard-config">
							<div className="config-section">
								{/* Config 2 Block 1 */}
								<div className="config-block">
									<div className="config-item toggle-switch-item">
										<div>
											<p className="config-title">
												<i className="fas fa-redo" /> Repeat Queue
											</p>
											<p className="config-desc">If Stereo should repeat the queue automatically</p>
											<p className="form-error">{errors.autorepeat}</p>
										</div>
										<Switch id="autorepeat" />
									</div>
									<div className="config-item toggle-switch-item">
										<div>
											<p className="config-title">
												<i className="fas fa-random" /> Auto Shuffle
											</p>
											<p className="config-desc">
												If Stereo should shuffle the queue automatically
											</p>
											<p className="form-error">{errors.autoshuffle}</p>
										</div>
										<Switch id="autoshuffle" />
									</div>
								</div>

								{/* Config 2 Block 2 */}
								<div className="config-block">
									<div className="config-item toggle-switch-item">
										<div>
											<p className="config-title">
												<i className="fas fa-trash" /> Delete Announcements
											</p>
											<p className="config-desc">If Stereo should delete old song announcements</p>
											<p className="form-error">{errors.deleteAnnounce}</p>
										</div>
										<Switch id="deleteAnnounce" />
									</div>
									<div className="config-item toggle-switch-item">
										<div>
											<p className="config-title">
												<i className="fas fa-bullhorn" /> Announcements
											</p>
											<p className="config-desc">If Stereo should announce songs</p>
											<p className="form-error">{errors.announce}</p>
										</div>
										<Switch id="announce" />
									</div>
								</div>
							</div>
						</div>
						{/* Config Section 3 */}
						<div className="dashboard-config">
							<div className="config-section">
								{/* Config 3 Block 1 */}
								<div className="config-block">
									<div className="config-item">
										<p className="config-title">
											<i className="fas fa-volume-up" /> Volume
										</p>
										<p className="config-desc">Volume applied when new player is created</p>
										<Slider id="defaultvolume" init={guild.config.defaultvolume} />
										<p className="form-error">{errors.defaultvolume}</p>
									</div>
								</div>

								{/* Config 3 Block 2 */}
								<div className="config-block">
									<div className="config-item toggle-switch-item">
										<div>
											<p className="config-title">
												<i className="fas fa-clock" /> 24/7
											</p>
											<p className="config-partner">This is for partners only</p>
											<p className="config-desc">If Stereo should stay in the voice channel 24/7</p>
											<p className="form-error">{errors.afk}</p>
										</div>
										<Switch id="afk" disabled={!guild.partner} />
									</div>
								</div>
							</div>
						</div>

						<SaveNotification
							functions={{ submitForm, resetForm }}
							init={config}
							formik={values}
							isSubmitting={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</main>
	);
};

export default Settings;
