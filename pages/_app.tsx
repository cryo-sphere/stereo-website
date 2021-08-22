import "react-notifications-component/dist/theme.css";
import "react-rangeslider/lib/index.css";
import "../styles/index.scss";

import ReactNotification from "react-notifications-component";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import type { AppProps } from "next/app";
import { getUser } from "../utils/User";
import { User } from "../types";
import Footer from "../components/footer";

const App = ({ Component, pageProps, router }: AppProps) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const fn = async () => {
			const res = await getUser();
			setLoading(false);
			setUser(res);
		};

		fn();
	}, []);

	return (
		<>
			<Navbar user={user} />
			<ReactNotification />
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={router.route}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.5,
							ease: [0.6, -0.05, 0.01, 0.99],
						},
					}}
					exit={{ opacity: 0 }}>
					<Component {...pageProps} {...{ user, loading }} />
				</motion.div>
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default App;
