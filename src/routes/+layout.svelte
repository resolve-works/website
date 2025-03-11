<script lang="ts">
	import '@fontsource-variable/rubik/index.css';
	import '@fontsource-variable/roboto-slab/index.css';
	import Section from '$lib/Section.svelte';

	let { children } = $props();
</script>

<article>
	<div>
		{@render children()}
	</div>

	<Section class="footer wide dark">
		<div class="footer">
			<h1>Resolve</h1>

			<a href="/fair-use">Fair Use Policy</a>

			<a href="https://github.com/resolve-works">GitHub</a>

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

	article > div {
		flex-grow: 1;
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
