import { FastFieldProps, Field } from "formik";
import ReactSwitch from "react-switch";
import React from "react";

const Switch: React.FC<{
	id: string;
	disabled?: boolean;
}> = ({ id, disabled = false }) => {
	return (
		<>
			<Field id={id} name={id}>
				{({ field, form }: FastFieldProps<boolean>) => (
					<ReactSwitch
						className="toggle-switch"
						checkedIcon={false}
						uncheckedIcon={false}
						onChange={(bool) => form.setFieldValue(id, bool)}
						checked={field.value}
						onColor="#57f287"
						offColor="#808080"
						disabled={disabled}
					/>
				)}
			</Field>
		</>
	);
};

export default Switch;
