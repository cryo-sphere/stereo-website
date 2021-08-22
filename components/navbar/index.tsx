import React, { useState } from "react";
import { User } from "../../types";
import Dropdown from "./dropdown";
import Link from "next/link";

const Navbar: React.FC<{ user: User | null }> = ({ user }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [dropdown, setDropdown] = useState<boolean>(false);

	const handleClick = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const handleDropdown = () => setDropdown(!dropdown);
	const closeDropdown = () => setDropdown(false);

	return (
		<div className="nav">
			<div className="nav-logo">
				<Link href="/" passHref={true}>
					<img src="/assets/logo.png" alt="Stereo Logo" style={{ cursor: "pointer" }} />
				</Link>
			</div>
			<div className={isOpen ? "nav-items active" : "nav-items"}>
				<Link href="/">
					<a className="nav-home" onClick={closeMenu}>
						Home
					</a>
				</Link>
				<Link href="/discord">
					<a onClick={closeMenu}>Discord</a>
				</Link>
				<Link href="/invite">
					<a onClick={closeMenu}>Invite</a>
				</Link>
				<Link href="/status">
					<a onClick={closeMenu}>Status</a>
				</Link>
				<Link href="/contributors">
					<a onClick={closeMenu}>Contributors</a>
				</Link>
			</div>
			<div className="nav-buttons">
				<div className="nav-user">
					<Dropdown
						username={user?.username}
						discrim={user?.discriminator}
						showDropdown={dropdown}
						onClick={closeDropdown}>
						{user ? (
							<img src={user.avatar} alt="" onClick={handleDropdown} />
						) : (
							<Link href="/login">
								<a className="nav-login">Login</a>
							</Link>
						)}
					</Dropdown>
				</div>
				<div className="nav-hamburger" onClick={handleClick}>
					{!isOpen ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
