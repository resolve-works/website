<script lang="ts">
	import Actionable from '$lib/Actionable.svelte';
	import FolderTag from '$lib/FolderTag.svelte';

	interface Props {
		name: string;
		inodes: { path: string }[];
		created_at: any;
	}

	let { name, inodes, created_at }: Props = $props();

	let parsed_created_at = $derived(new Date(created_at).toLocaleString('en-US', { hour12: false }));
</script>

<Actionable {name} icon="gg-comment">
	{#snippet actions()}
		<time>{parsed_created_at}</time>
	{/snippet}

	<div>
		{#each inodes as inode}
			<FolderTag path={inode.path} is_width_limited />
		{/each}
	</div>
</Actionable>

<style>
	time {
		color: var(--text-color-dark-lighter);
	}

	div {
		display: flex;
		gap: 0rem 0.5rem;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
	}
</style>
