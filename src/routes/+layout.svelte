<script lang="ts">
	import '@fontsource-variable/rubik/index.css';
	import '@fontsource-variable/roboto-slab/index.css';
	import Section from '$lib/Section.svelte';

	import { onMount } from 'svelte';

	let text: string = 'Resolve';
	let speed: number = 50;

	let displayed_text: string = $state('R');
	let is_complete: boolean = $state(false);

	function type_text() {
		if (displayed_text.length < text.length) {
			displayed_text += text[displayed_text.length];
			setTimeout(type_text, speed);
		} else {
			is_complete = true;
		}
	}

	onMount(() => {
		const timeoutId = setTimeout(type_text);

		return () => {
			clearTimeout(timeoutId);
		};
	});

	let { children } = $props();
</script>

<article>
	<Section class="nav wide">
		<nav>
			<h1 class="typing-animation" class:complete={is_complete}>
				<a href="/">{displayed_text}</a>
			</h1>
		</nav>
	</Section>

	{@render children()}

	<Section class="footer wide">
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

	.typing-animation {
		border-right: 2px solid currentColor;
		display: inline;
	}

	.typing-animation.complete {
		border-right: none;
	}

	nav h1 a {
		font-size: 1.5rem;
		color: var(--text-color-light);
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
