<script lang="ts">
	import '@fontsource-variable/rubik/index.css';
	import '@fontsource-variable/roboto-slab/index.css';
	import Section from '$lib/Section.svelte';

	let { children } = $props();
</script>

<article>
	{@render children()}

	<Section class="footer wide dark">
		<div class="footer">
			<h1>Resolve</h1>

			<a href="/fair-use">Fair Use Policy</a>

			<p>Made with ❤️ in Europe</p>
		</div>
	</Section>
</article>

<style>
	article {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.footer {
		padding: 8rem 0 4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}
	.footer > h1 {
		flex-grow: 1;
	}
</style>
