import React from "react";

export const Filterbar: React.FC = () => {
	return (
		<div className="filterbar">
			<h1 className="filterbar-title">Filters</h1>
			<ul className="filterbar-list">
				<li>
					<button className="filterbar-item">Vaporwave</button>
				</li>
				<li>
					<button className="filterbar-item filterbar-active">Slowed</button>
				</li>
			</ul>
		</div>
	);
};
