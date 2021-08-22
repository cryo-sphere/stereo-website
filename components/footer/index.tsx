import React from "react";
import { crowdin } from "../../config";

const Footer: React.FC = () => {
	return (
		<div className="footer">
			<div className="footer-level-1">
				<div className="footer-info">
					<div className="footer__info-branding">
						<img src="https://cdn.stereo-bot.tk/branding/logo.png" alt="" />
						<h1>Stereo</h1>
					</div>
					<p>The best free Discord music bot</p>
				</div>
				<div className="footer-buttons">
					<i
						className="fab fa-github"
						onClick={() => window.open("https://stereo-bot.tk/github")}
					/>
					<i
						className="fab fa-discord"
						onClick={() => window.open("https://stereo-bot.tk/discord")}
					/>
					<i
						className="fab fa-paypal"
						onClick={() => window.open("https://daangamesdg.wtf/paypal")}
					/>
					<i className="fas fa-language" onClick={() => window.open(crowdin)} />
				</div>
			</div>
			<div className="footer-level-2">
				<div className="footer-credits">
					<i className="fas fa-code" />
					&nbsp;with&nbsp;
					<i className="fas fa-heart" />
					&nbsp;by&nbsp;
					<p className="link" onClick={() => window.open("https://daangamesdg.wtf/")}>
						DaanGamesDG
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
