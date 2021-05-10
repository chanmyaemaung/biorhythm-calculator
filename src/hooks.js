import { useState } from 'react';

export function useLocalStorage(key, defaultValue) {
	const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
	const [value, setValue] = useState(getInitialValue);
	const setAndStorValue = (newValue) => {
		setValue(newValue);
		localStorage.setItem(key, newValue);
	};
	return [value, setAndStorValue];
}
