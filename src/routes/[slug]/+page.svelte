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
		<h1>{data.meta.title}</h1>
		<div>{@html data.content}</div>
	</article>
{/if}
