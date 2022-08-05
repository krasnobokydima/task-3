import { useEffect, useState } from "react";

const key = "saved-universities";

export const useLocalStorage = () => {

	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(key);
		if (jsonValue !== null) return JSON.parse(jsonValue);

    return [];
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};