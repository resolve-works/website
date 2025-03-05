<script lang="ts">
	let { children, is_primary = false } = $props();
</script>

<section class:primary={is_primary}>
	<div>
		{@render children()}
	</div>
</section>

<style>
	div {
		max-width: 66rem;
		margin: 0 auto;
	}

	section.primary {
		background: var(--color-primary);
	}
</style>
