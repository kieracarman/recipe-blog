<script>
	import { theme } from '../stores/theme.js';

	function toggleTheme() {
		$theme = $theme === 'system' ? 'dark' : $theme === 'dark' ? 'light' : 'system';
	}
</script>

<button class="nav-button fixed top-4 left-4 z-50" onclick={toggleTheme}>
	{#if $theme === 'system'}
		🌓 Auto
	{:else if $theme === 'dark'}
		🌙 Dark
	{:else}
		Light
	{/if}
</button>
