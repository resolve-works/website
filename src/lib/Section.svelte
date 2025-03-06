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

	section.primary {
		background: var(--color-primary);
		color: var(--text-color-light);
	}

	section.primary.border-bottom {
		border-bottom: 1px solid var(--color-primary-darker);
	}

	section.dark {
		background: var(--color-navigation-darker);
		color: var(--text-color-light);
	}

	section.dark.border-top {
		border-top: 1px solid var(--color-navigation);
	}

	section.white {
		background: var(--color-white);
	}

	section.white.border-top {
		border-top: 1px solid #fff;
	}

	section.nav {
		padding: 2rem 0;
	}

	section.hero {
		padding: 12rem 0;
	}

	section.footer {
		padding: 0;
	}

	section.footer.spaced {
		margin-top: 10rem;
	}

	section.wide > div {
		max-width: 90rem !important;
	}
</style>
