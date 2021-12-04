import React, { useState } from "react";
import Image from "next/image";
import { Tippy } from "../Tippy";
import RangeSlider from "@gilbarbara/react-range-slider";

export const MusicBar: React.FC = () => {
	const [volume, setVolume] = useState(100);
	const [position, setPosition] = useState(0);

	return (
		<div className="musicbar">
			<Tippy content="Open in browser">
				<a href="https://youtube.com/watch?v=C4mBfkNVnEk" target="_blank" rel="noreferrer" className="musicbar-song-info">
					<Image alt="song image" src="https://img.youtube.com/vi/C4mBfkNVnEk/default.jpg" width={66.7} height={50} />
					<div className="musicbar-song-text">
						<h3>Placeholder song title</h3>
						<p>Placeholder song source</p>
					</div>
				</a>
			</Tippy>
			<div className="musicbar-track-options">
				<div>
					<button className="musicbar__track-shuffle">
						<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7.03125 10.625L8.125 9.375C6.40625 7.34375 3.90625 6.25 1.40625 6.25V7.8125C3.4375 7.8125 5.46875 8.75 6.875 10.3125L7.03125 10.625ZM18.75 17.9688C16.875 17.9688 15.1563 17.1875 13.75 15.9375L12.8125 17.1875C14.375 18.75 16.5625 19.5312 18.75 19.5312V21.875L24.2188 18.75L18.75 15.625V17.9688ZM18.75 8.59375V10.9375L24.2188 7.8125L18.75 4.6875V7.03125C16.25 7.03125 13.75 8.125 12.1875 10.1562L6.875 16.25C5.46875 17.8125 3.4375 18.75 1.40625 18.75V20.3125C3.90625 20.3125 6.40625 19.2187 7.96875 17.1875L13.2812 11.0937C14.6875 9.53125 16.7188 8.59375 18.75 8.59375Z"
								fill="#fff"
							/>
						</svg>
					</button>
					<button className="musicbar__track-previous">
						<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.3125 3.90625L7.8125 11.1234V4.6875H4.6875V20.3125H7.8125V13.8766L20.3125 21.0938V3.90625Z" fill="#fff" />
						</svg>
					</button>
					<button className="musicbar__track-play">
						{true ? (
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.6875 3.125H9.375V21.875H4.6875V3.125ZM15.625 3.125H20.3125V21.875H15.625V3.125Z" fill="black" />
							</svg>
						) : (
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.27832 21.875L22.5158 12.5L6.27832 3.125V21.875Z" fill="black" />
							</svg>
						)}
					</button>
					<button className="musicbar__track-next">
						<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.1875 4.6875V11.1234L4.6875 3.90625V21.0938L17.1875 13.8766V20.3125H20.3125V4.6875H17.1875Z" fill="white" />
						</svg>
					</button>
					<button className="musicbar__track-repeat">
						{true ? (
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.59375 7.8125H15.625V10.1562L21.0938 7.03125L15.625 3.90625V6.25H8.59375C4.6875 6.25 1.5625 9.375 1.5625 13.2812C1.5625 14.2188 1.71875 15.1563 2.1875 16.0938L3.59375 15.3125C3.28125 14.6875 3.125 14.0625 3.125 13.2812C3.125 10.3125 5.625 7.8125 8.59375 7.8125ZM22.8125 10.4687L21.4062 11.25C21.7187 11.875 21.875 12.5 21.875 13.2812C21.875 16.25 19.375 18.75 16.4062 18.75H9.375V16.4062L3.90625 19.5312L9.375 22.6562V20.3125H16.4062C20.3125 20.3125 23.4375 17.1875 23.4375 13.2812C23.4375 12.3437 23.2813 11.4062 22.8125 10.4687Z"
									fill="#fff"
								/>
							</svg>
						) : (
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.8125 7.8125V6.25C4.375 6.71875 1.5625 9.6875 1.5625 13.2812C1.5625 14.2188 1.71875 15.1563 2.1875 16.0938L3.59375 15.3125C3.28125 14.6875 3.125 14.0625 3.125 13.2812C3.125 10.4688 5.15625 8.28125 7.8125 7.8125ZM16.4062 18.75H9.375V16.4062L3.90625 19.5312L9.375 22.6562V20.3125H16.4062C19.375 20.3125 21.875 18.4375 22.9687 15.9375C22.1875 16.4062 21.4062 16.7188 20.625 16.875C19.5312 17.9688 18.125 18.75 16.4062 18.75V18.75ZM17.9688 0C14.0625 0 10.9375 3.125 10.9375 7.03125C10.9375 10.9375 14.0625 14.0625 17.9688 14.0625C21.875 14.0625 25 10.9375 25 7.03125C25 3.125 21.875 0 17.9688 0ZM19.375 10.9375H17.3438V5.625H15.625V4.0625H15.7813C16.0938 4.0625 16.25 4.0625 16.4062 3.90625C16.5625 3.90625 16.875 3.75 17.0312 3.59375C17.1875 3.4375 17.3438 3.28125 17.3438 3.125C17.5 2.96875 17.5 2.8125 17.5 2.65625V2.5H19.2188V10.9375H19.375Z"
									fill="#fff"
								/>
							</svg>
						)}
					</button>
				</div>
				<div>
					<RangeSlider
						className="musicbar-track-volume-slider"
						axis="x"
						x={position}
						xMax={100}
						xMin={0}
						xStep={0.1}
						onChange={(position) => setPosition(position.x)}
						styles={{
							options: {
								thumbBorder: 0,
								thumbBorderRadius: "100%",
								thumbColor: "#fff",
								thumbSize: 16,
								height: 10,
								rangeColor: "#78a4fa",
								trackBorderRadius: 5,
								trackColor: "#535353"
							}
						}}
					/>
				</div>
			</div>
			<div className="musicbar-volume">
				<Tippy content={`${volume}%`}>
					<div style={{ width: "100%", display: "grid", placeItems: "center" }}>
						<RangeSlider
							className="musicbar-track-volume-slider"
							axis="x"
							x={volume}
							xMax={200}
							xMin={0}
							xStep={1}
							onChange={(position) => setVolume(position.x)}
							styles={{
								options: {
									thumbBorder: 0,
									thumbBorderRadius: "100%",
									thumbColor: "#fff",
									thumbSize: 16,
									height: 10,
									rangeColor: "#78a4fa",
									trackBorderRadius: 5,
									trackColor: "#535353"
								}
							}}
						/>
					</div>
				</Tippy>
			</div>
		</div>
	);
};
