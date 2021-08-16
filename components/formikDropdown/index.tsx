import Select, { OptionsType, ValueType, defaultTheme } from "react-select";
import { FieldProps } from "formik";
import React from "react";

interface Option {
	label: string;
	value: string;
}

interface CustomSelectProps extends FieldProps {
	disabled?: string[];
	options: OptionsType<Option>;
	isMulti?: boolean;
	className?: string;
	placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	className,
	placeholder,
	field,
	form,
	options,
	isMulti = false,
	disabled = [],
}) => {
	const setTheme = (theme: typeof defaultTheme): typeof defaultTheme => {
		theme.colors = {
			...theme.colors,
			neutral0: "#14161A",
			neutral10: "#333841",
			neutral20: "rgba(255, 255, 255, 0.2)",
			primary25: "#5865f2",
			primary: "#5865f2",
			neutral80: "#fbfdfe",
		};

		return theme;
	};

	const onChange = (option: ValueType<Option | Option[], boolean>) => {
		const val = isMulti
			? (option as Option[]).map((item: Option) => item.value)
			: (option as Option).value;

		form.setFieldValue(field.name, val);
	};

	const getValue = () => {
		if (options)
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value);
		else return isMulti ? [] : ("" as any);
	};

	return (
		<Select
			instanceId={field.name}
			className={className + " custom-dropdown"}
			name={field.name}
			value={getValue()}
			onChange={onChange}
			placeholder={placeholder}
			options={options}
			isMulti={isMulti}
			theme={setTheme}
			isOptionDisabled={(option: { value: string; label: string }) =>
				disabled.includes(option.value)
			}
		/>
	);
};

export default CustomSelect;
