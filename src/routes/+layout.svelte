<script lang="ts">
	import '@fontsource-variable/rubik/index.css';
	import '@fontsource-variable/roboto-slab/index.css';

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
	<section>
		<nav>
			<h1 class="typing-animation" class:complete={is_complete}>
				<a href="/">{displayed_text}</a>
			</h1>
		</nav>
	</section>

	{@render children()}
</article>

<style>
	.typing-animation {
		border-right: 2px solid currentColor;
		display: inline;
	}

	.typing-animation.complete {
		border-right: none;
	}

	section {
		background: var(--color-primary);
	}

	nav {
		width: 70rem;
		margin: 0 auto;
		padding: 1rem 0;
	}

	nav h1 a {
		font-size: 1.5rem;
		color: var(--text-color-light);
	}
</style>
