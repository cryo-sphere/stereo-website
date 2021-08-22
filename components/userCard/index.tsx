import { motion } from "framer-motion";
import React from "react";

interface Props {
	img: string;
	username: string;
	roles: string[];
}

const UserCard: React.FC<Props> = ({ img, username, roles }) => {
	return (
		<motion.div
			className="usercard"
			initial={{ y: 0, backgroundColor: "#383839" }}
			animate={{
				backgroundColor: "#383839",
				y: 0,
				transition: {
					duration: 1,
					ease: [0.6, -0.05, 0.01, 0.99],
				},
			}}
			whileHover={{
				y: -10,
				backgroundColor: "#272727",
			}}>
			<img className="usercard-img" src={img} alt="" />
			<p className="usercard-username">{username}</p>
			<div className="usercard-roles">
				{roles.map((r, i) => (
					<p key={i}>{r}</p>
				))}
			</div>
		</motion.div>
	);
};

export default UserCard;
