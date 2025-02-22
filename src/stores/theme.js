import { writable } from 'svelte/store';

function createThemeStore() {
	const { subscribe, set } = writable('system');

	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			set(savedTheme);
		}
	}

	return {
		subscribe,
		set: (value) => {
			if (typeof window !== 'undefined') {
				if (value !== 'system') {
					document.documentElement.removeAttribute('data-theme');
				} else {
					document.documentElement.setAttribute('data-theme', value);
				}
				localStorage.setItem('theme', value);
			}
			set(value);
		}
	};
}

export const theme = createThemeStore();
