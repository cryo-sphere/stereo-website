import React, { useEffect, useState } from "react";
import { formatName } from "../../utils/User";
import Link from "next/link";

const Dropdown: React.FC<{
	username: string | undefined;
	discrim: string | undefined;
	showDropdown: boolean;
	onClick: () => void;
}> = ({ username, discrim, children, showDropdown, onClick }) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(
		() =>
			window.addEventListener("resize", () => {
				const bool = window.innerWidth < 960;
				setIsMobile(bool);
			}),
		[]
	);

	return (
		<div className="dropdown">
			{children}
			<div className={showDropdown ? "dropdown-container active" : "dropdown-container"}>
				<p className="dropdown-user">
					{formatName(username ?? "User", Number(discrim) ?? 1, isMobile ? 8 : 17)}
				</p>
				<Link href="/playlists">
					<a className="dropdown-item" onClick={onClick}>
						<i className="fas fa-music" />
						<p>Playlists</p>
					</a>
				</Link>
				<i className="separator" />
				<Link href="/dashboard">
					<a className="dropdown-item" onClick={onClick}>
						<i className="fas fa-list" />
						<p>Servers</p>
					</a>
				</Link>
				<i className="separator" />
				<Link href="/logout">
					<a className="dropdown-item" onClick={onClick}>
						<i className="fas fa-sign-out-alt" />
						<p>Logout</p>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Dropdown;
