import React, { useState } from "react";

interface Props {
	src: string;
	fallback: React.ReactNode;
	alt?: string;
	className?: string;
	style?: React.CSSProperties;
}

const Image: React.FC<Props> = ({ fallback, src, alt, className, style }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			{!loaded && fallback}
			<img
				src={src}
				alt={alt ?? ""}
				className={className}
				style={{
					...style,
					display: !loaded ? "none" : style?.display ?? "initial",
				}}
				onLoad={() => setLoaded(true)}
			/>
		</>
	);
};
export default Image;
