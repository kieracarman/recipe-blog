<script lang="ts">
	let { data } = $props();
</script>

<ul class="flex flex-col gap-8">
	{#each data.recipes as recipe}
		<li>
			<a href={`/${recipe.slug}`}>
				<div class="text-xl font-bold underline md:text-4xl">{recipe.meta.title}</div>
			</a>
		</li>
	{/each}
</ul>
