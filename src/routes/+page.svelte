<script lang="ts">
	import RecipeList from '$lib/RecipeList.svelte';
	let { data } = $props();
</script>

<RecipeList recipes={data.recipes} />
