<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}
	let props: Props = $props();
</script>

<section class={props.class}>
	<div>
		{@render props.children()}
	</div>
</section>

<style>
	section {
		padding: 4rem 0;
	}

	section > div {
		max-width: 70rem;
		margin: 0 auto;
	}

	section.nav {
		background: var(--color-primary);
		padding: 2rem 0;
	}

	section.hero {
		background: var(--color-primary);
		color: var(--text-color-light);
		padding: 12rem 0;
		border-bottom: 1px solid var(--color-primary-darker);
	}

	section.footer {
		padding: 0;
		background: var(--color-navigation-darker);
		color: var(--text-color-light);
	}

	section.footer.spaced {
		margin-top: 10rem;
		border-top: 1px solid var(--color-navigation);
	}

	section.white {
		background: var(--color-white);
		border-top: #fff;
	}

	section.wide > div {
		max-width: 90rem !important;
	}
</style>
