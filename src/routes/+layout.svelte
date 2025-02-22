<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Kiera's Recipes</title>
</svelte:head>

<main class="mx-auto min-h-full max-w-[65ch] p-8">
	{@render children()}
</main>
