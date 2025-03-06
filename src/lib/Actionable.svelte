<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Icon from '$lib/Icon.svelte';

	interface Props {
		name: string | undefined;
		icon: string;
		test_id?: string | undefined;
		actions?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let { name, icon, test_id = undefined, actions, children }: Props = $props();
</script>

<Card data-testid={test_id}>
	<header>
		<h3 data-testid={test_id ? `${test_id}-title` : undefined}>
			<Icon class={icon} />

			{name}
		</h3>

		{@render actions?.()}
	</header>

	{@render children?.()}
</Card>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		justify-content: space-between;
	}

	h3 {
		text-decoration: none;
		color: var(--text-color-dark);
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
