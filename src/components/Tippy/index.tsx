import Tooltip, { TippyProps } from "@tippyjs/react";
import React from "react";

export const Tippy: React.FC<TippyProps> = (props) => {
	return (
		<Tooltip
			{...props}
			className="discord-theme"
			theme="discord"
			arrow
			inertia
			animation="discord-anim"
			duration={[100, 100]}
			hideOnClick={false}
		>
			{props.children}
		</Tooltip>
	);
};
