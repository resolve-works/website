<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import Actionable from './Actionable.svelte';
	import Buttongroup from './Buttongroup.svelte';
	import InputGroup from './InputGroup.svelte';

	interface Props {
		name: string;
		type: string;
		is_ready: boolean;
		is_owned: boolean;
		error?: string | undefined;
		users?: { name: string };
	}

	let { name, type, is_ready, is_owned, error, users }: Props = $props();

	let icon = type == 'file' ? 'gg-file-document' : 'gg-folder';
</script>

<Actionable {icon} {name} test_id="inode">
	{#snippet actions()}
		<InputGroup>
			{#if error}
				<Icon test_id="inode-error" class="gg-danger error" title={error} />
			{:else if !is_ready}
				<Icon test_id="inode-loader" class="gg-loadbar" />
			{/if}

			{#if !is_owned}
				<span>Shared by {users.name}</span>
			{/if}
			{#if is_owned}
				<Buttongroup test_id="inode-actions">
					<button class="button" data-testid="edit-inode">
						<Icon class="gg-pen" />
						Edit
					</button>

					<button class="button" data-testid="delete-inode"><Icon class="gg-trash" /> Delete</button
					>
				</Buttongroup>
			{/if}
		</InputGroup>
	{/snippet}
</Actionable>

<style>
	span {
		margin-right: 1rem;
		color: var(--text-color-dark-lighter);
	}
</style>
