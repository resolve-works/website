<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		left: Snippet;
		right: Snippet;
	}

	const props: Props = $props();
</script>

<div class="split">
	<div>
		{@render props.left()}
	</div>

	<div>
		{@render props.right()}
	</div>
</div>

<style>
	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
</style>
