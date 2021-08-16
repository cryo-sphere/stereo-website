import { motion, useAnimation, Variants } from "framer-motion";
import { GuildConfig } from "../../types";
import Loader from "react-loader-spinner";
import React, { useEffect } from "react";

interface Props {
	isSubmitting: boolean;
	init: GuildConfig;
	formik: GuildConfig;
	functions: {
		resetForm: () => void;
		submitForm: () => void;
	};
}

const SaveNotification: React.FC<Props> = ({
	init,
	formik,
	isSubmitting,
	functions: { resetForm, submitForm },
}) => {
	const controls = useAnimation();
	const variants: Variants = {
		appear: {
			y: "0rem",
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		disappear: {
			y: "2rem",
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	useEffect(() => {
		const bool = !(JSON.stringify(init) === JSON.stringify(formik));

		if (bool) controls.start("appear");
		else if (!bool && !isSubmitting) controls.start("disappear");
	}, [formik, init, controls, isSubmitting]);

	return (
		<motion.div
			initial="disappear"
			animate={controls}
			variants={variants}
			className="save-notification-wrapper">
			<div className="save-notification">
				<p className="save__notification-text">
					It&apos;s dangerous out there, don&apos;t forget to save!
				</p>
				<div className="save__notification-buttons">
					<p
						className="save__notification-reset"
						style={{
							opacity: isSubmitting ? 0.5 : 1,
							cursor: isSubmitting ? "not-allowed" : "pointer",
						}}
						onClick={!isSubmitting ? resetForm : () => null}>
						Reset
					</p>
					<div
						className="save__notification-save"
						style={{
							opacity: isSubmitting ? 0.5 : 1,
							cursor: isSubmitting ? "not-allowed" : "pointer",
						}}
						onClick={!isSubmitting ? submitForm : () => null}>
						{isSubmitting ? (
							<Loader type="ThreeDots" color="#fff" height={20} width={60} />
						) : (
							"Save"
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default SaveNotification;
