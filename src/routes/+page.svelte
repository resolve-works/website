<script lang="ts">
	import '@fontsource-variable/moderustic/index.css';
	import '@fontsource-variable/lora/index.css';

	import { onMount } from 'svelte';

	export let text: string = '> resolve';
	export let speed: number = 50;

	let displayed_text: string = '> ';
	let is_complete: boolean = false;

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
</script>

<svelte:head>
	<title>> resolve</title>
</svelte:head>

<article>
	<main>
		<h1 class="typing-animation" class:complete={is_complete}>{displayed_text}</h1>
		<p>
			We are IT professionals with a vision. That vision is for technology to empower humans.
			Empower them to make sense of the void, empower them to find answers, and empower them to dare
			to ask questions. Will you explore with us? <a href="mailto:johan@resolve.works">Contact us</a
			>.
		</p>
		<br />
	</main>
</article>

<style>
	:global {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: 'Moderustic Variable', serif;
		}

		body {
			font-family: 'Lora Variable', serif;
			margin: 0;
			line-height: 1.6rem;
		}
	}

	h1 {
		font-weight: normal;
		font-size: 2rem;
	}

	article {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	main {
		max-width: 60rem;
		padding: 2rem 1rem;
	}

	a {
		color: #2c6c2f;
	}

	a:hover {
		color: #1a401c;
	}

	.typing-animation {
		border-right: 2px solid currentColor;
		display: inline;
	}

	.typing-animation.complete {
		border-right: none;
	}
</style>
