import { FastFieldProps, Field } from "formik";
import RangeSlider from "react-rangeslider";
import React, { useState } from "react";

const Slider: React.FC<{
	id: string;
	init: number;
}> = ({ id, init }) => {
	const [volume, setVolume] = useState(init);

	return (
		<>
			<Field id={id} name={id}>
				{({ form }: FastFieldProps<number>) => (
					<div style={{ display: "flex", alignItems: "center" }}>
						<RangeSlider
							className="range-slider"
							value={volume}
							min={0}
							max={200}
							onChange={(number) => setVolume(number)}
							onChangeComplete={() => form.setFieldValue(id, volume)}
						/>
						<p style={{ marginLeft: "10px" }}>{volume}%</p>
					</div>
				)}
			</Field>
		</>
	);
};

export default Slider;
