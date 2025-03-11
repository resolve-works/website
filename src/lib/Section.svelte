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
		position: relative;
		padding: 4rem 1rem;
	}

	section > div {
		max-width: 70rem;
		margin: 0 auto;
		width: 100%;
	}

	section.wide > div {
		max-width: 90rem !important;
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
		padding: 2rem 1rem;
	}

	section.hero {
		padding: 8rem 1rem;
	}

	section.footer {
		padding: 0;
	}

	section.footer.spaced {
		margin-top: 5rem;
	}

	@media (min-width: 768px) {
		section {
			padding: 4rem 2rem;
		}

		section.nav {
			padding: 2rem;
		}

		section.hero {
			padding: 12rem 2rem;
		}

		section.footer.spaced {
			margin-top: 10rem;
		}
	}
</style>
