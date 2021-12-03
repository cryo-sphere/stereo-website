import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tippy } from "../Tippy";

export const Filterbar: React.FC = () => {
	return (
		<div className="filterbar">
			<Link href="/dashboard">
				<a>
					<Tippy content="Back to dashboard">
						<div className="filterbar-logo">
							<Image src="/favicon.ico" alt="Stereo logo" width={40} height={40} />
							<h1>Stereo</h1>
							<i className="fas fa-sign-out-alt" />
						</div>
					</Tippy>
				</a>
			</Link>
			<h1 className="filterbar-title">Filters</h1>
			<hr className="filterbar-separator"></hr>
			<ul className="filterbar-list">
				<li>
					<button className="filterbar-item">Karaoke</button>
				</li>
				<li>
					<button className="filterbar-item">Tremelo</button>
				</li>
				<li>
					<button className="filterbar-item">Pop</button>
				</li>
				<li>
					<button className="filterbar-item">8D</button>
				</li>
				<li>
					<button className="filterbar-item">Slowed</button>
				</li>
				<li>
					<button className="filterbar-item">Vaporwave</button>
				</li>
				<li>
					<button className="filterbar-item">Nightcore</button>
				</li>
				<li>
					<button className="filterbar-item">Soft</button>
				</li>
				<li>
					<button className="filterbar-item">Bassboost: Extreme</button>
				</li>
				<li>
					<button className="filterbar-item">Bassboost: Hard</button>
				</li>
				<li>
					<button className="filterbar-item">Bassboost: Medium</button>
				</li>
				<li>
					<button className="filterbar-item">Bassboost: Low</button>
				</li>
				<li>
					<button className="filterbar-item">none</button>
				</li>
			</ul>
		</div>
	);
};
