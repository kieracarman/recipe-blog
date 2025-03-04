<script>
	let { data } = $props();
</script>

{#if data.error}
	<div class="error">
		<h1>404</h1>
		<p>{data.error.message}</p>
		<p><small>{data.error.hint}</small></p>
	</div>
{:else}
	<article>
		<a href="/" class="mb-4 block opacity-50 transition-opacity duration-200 hover:opacity-90"
			>← back to recipes</a
		>
		<h1 class="mb-2">{data.meta.title}</h1>
		<div>{@html data.content}</div>
	</article>
{/if}
