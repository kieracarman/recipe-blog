<script>
	import Menu from '$lib/Menu.svelte';
	let { data } = $props();
</script>

{#if data.error}
	<div class="error">
		<h1>404</h1>
		<p>{data.error.message}</p>
		<p><small>{data.error.hint}</small></p>
		<Menu />
	</div>
{:else}
	<article class="">
		<h1>{data.meta.title}</h1>
		<div class="recipe-content">{@html data.content}</div>
		<Menu />
	</article>
{/if}
