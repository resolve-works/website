<script lang="ts">
	import Section from '$lib/Section.svelte';
	import { onMount } from 'svelte';

	interface Props {
		class: string;
	}

	const props: Props = $props();

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
</script>

<Section class="nav wide {props.class}">
	<nav>
		<h1 class="typing-animation" class:complete={is_complete}>
			<a href="/">{displayed_text}</a>
		</h1>
	</nav>
</Section>

<style>
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
</style>
