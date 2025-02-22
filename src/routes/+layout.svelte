<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="mx-auto min-h-full max-w-[65ch] p-8">
	{@render children()}
</main>
