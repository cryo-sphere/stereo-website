import { motion } from "framer-motion";
import Link from "next/link";
import Image from "../image";
import React from "react";

const Guild: React.FC<{ id: string; name: string; icon: string | null; invited?: boolean }> = ({
	id,
	name,
	icon,
	invited = false,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
			className="guild-container">
			<div className="guild-info">
				<Image
					fallback={<div className="guild-icon-fallback" />}
					className="guild-icon"
					src={icon ?? ""}
					alt=""
				/>
				<p className="guild-title">{name}</p>
			</div>
			<Link href={invited ? `/dashboard/${id}` : `/invite?guildId=${id}&type=1`}>
				<a className={invited ? "guild-dashboard" : "guild-invite"}>
					{invited ? "Dashboard" : "Invite"}
				</a>
			</Link>
		</motion.div>
	);
};

export default Guild;
