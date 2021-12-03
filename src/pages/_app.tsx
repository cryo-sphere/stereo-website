import "../../styles/index.scss";
import "tippy.js/dist/tippy.css";
import "react-rangeslider/lib/index.css";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
