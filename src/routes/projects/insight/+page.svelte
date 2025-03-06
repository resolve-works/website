<script lang="ts">
	import Conversation from '$lib/Conversation.svelte';
	import InputGroup from '$lib/InputGroup.svelte';
	import Icon from '$lib/Icon.svelte';
	import Inode from '$lib/Inode.svelte';
	import Section from '$lib/Section.svelte';
	import Split from '$lib/Split.svelte';
</script>

<svelte:head>
	<title>Resolve - Insight</title>
</svelte:head>

<Section class="hero wide">
	<Split>
		{#snippet left()}
			<h1>Insight</h1>

			<p>Insight is the knowledge-base you build with your colleagues.</p>
			<br />

			<InputGroup>
				<a class="button big secondary" href="mailto:insight@resolve.works">Contact Us</a>

				<a class="button big" href="https://insight.resolve.works" target="_blank">Try Insight</a>
			</InputGroup>
		{/snippet}

		{#snippet right()}
			<Conversation
				name="Who evaded tax?"
				inodes={[{ path: '/new leak' }, { path: '/2019/unsolved' }]}
				created_at={new Date()}
			></Conversation>
			<Conversation
				name="What was discussed?"
				inodes={[{ path: 'correspondence' }]}
				created_at={new Date()}
			></Conversation>
		{/snippet}
	</Split>
</Section>

<Section class="white">
	<div>
		<Split>
			{#snippet left()}
				<h2>Make sense of documents</h2>
			{/snippet}
			{#snippet right()}
				<p class="features">Keyword search and conversations through generative AI.</p>
			{/snippet}
		</Split>

		<ul class="checks">
			<li>
				<Icon class="gg-check-o" /> Open-source
			</li>

			<li>
				<Icon class="gg-check-o" /> Multi-user
			</li>

			<li>
				<Icon class="gg-check-o" /> Web GUI + CLI interface
			</li>
		</ul>
	</div>

	<div class="blocks">
		<div class="step-1">
			<p class="icon"><Icon class="gg-file-document" /></p>

			<h4>1</h4>
			<p>Upload</p>
		</div>

		<div class="step-2">
			<p class="icon"><Icon class="gg-comment" /></p>

			<h4>2</h4>
			<p>Explore</p>
		</div>

		<div class="step-3">
			<p class="icon"><Icon class="gg-search" /></p>

			<h4>3</h4>
			<p>Research</p>
		</div>

		<div class="step-4">
			<p class="icon"><Icon class="gg-copy" /></p>

			<h4>4</h4>
			<p>Share</p>
		</div>
	</div>

	<div class="today">
		<h3>Start building your organizational knowledge-base today</h3>
	</div>
</Section>

<Section>
	<h3>Funding</h3>
	<p>Insight has been funded by</p>

	<div class="funder">
		<div class="logo">
			<img alt="ftm logo" src="https://www.ftm.nl/assets/img/apple/touch-icon-iphone-retina.png" />
		</div>
		<div class="text">
			<h4>Follow the Money</h4>
			<p class="url"><a href="https://ftm.eu">https://www.ftm.eu</a></p>

			<p>Follow the Money is an investigative news outlet for radically independent journalism.</p>
		</div>
	</div>

	<p class="fund">
		Interested in funding Insight? <a href="mailto:insight@resolve.works">Contact Us</a>.
	</p>
</Section>

<Section class="footer spaced">
	<div class="overlap split">
		<div>
			<h2>Curious?</h2>
			<p>Try our public instance and get in touch!</p>
			<br />
			<InputGroup>
				<a class="button big secondary" href="mailto:insight@resolve.works">Contact Us</a>

				<a class="button big" href="https://insight.resolve.works" target="_blank">Try Insight</a>
			</InputGroup>
			<br />
		</div>

		<div>
			<Inode name="Project planning" type="file" is_ready={true} is_owned={true} />
			<Inode name="Articles" type="folder" is_ready={true} is_owned={true} />
			<Inode
				name="Reports"
				type="folder"
				is_ready={true}
				is_owned={false}
				users={{ name: 'Colleague' }}
			/>
		</div>
	</div>
</Section>

<style>
	p {
		font-size: 1.2rem;
		line-height: 2rem;
	}

	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.hero h1 {
		font-size: 4rem;
		margin: 1rem 0 2rem 0;
	}

	.hero p {
		margin: 1rem 0 2rem 0;
	}

	h2 {
		font-size: 3rem;
	}

	h3 {
		font-size: 2rem;
		line-height: 3rem;
	}

	.features {
		font-size: 2rem;
		line-height: 2.5rem;
		margin-top: 3rem;
	}

	ul.checks {
		list-style: none;
		padding-left: 0;
		display: flex;
		gap: 2rem;
	}

	ul.checks li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.2rem;
	}

	.blocks {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
		padding: 4rem 0;
	}

	.blocks > div {
		background: var(--color-page);
		padding: 0 1rem;
	}

	.blocks > div .icon {
		--ggs: 3;
		width: 4rem;
		height: 5rem;
		align-items: center;
		display: flex;
		justify-content: center;
	}
	.blocks > div h4 {
		font-size: 2rem;
		margin: 8rem 0 1rem;
	}

	.blocks .step-2 {
		background: var(--color-secondary-lighter);
	}

	.blocks .step-3 {
		background: var(--color-primary-lighter);
		color: var(--text-color-light);
	}

	.blocks .step-4 {
		background: var(--text-color-dark);
		color: var(--text-color-light);
	}

	.today {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.today h3 {
		max-width: 50%;
		text-align: center;
		margin-bottom: 6rem;
	}

	.funder {
		display: grid;
		grid-template-columns: 1fr 5fr;
		gap: 2rem;
		background: var(--color-white);
		padding: 2rem;
	}

	.funder h4 {
		font-size: 1.4rem;
		margin-bottom: 0;
	}

	.funder .url {
		margin-top: 0.5rem;
	}

	.funder .logo img {
		width: 100%;
	}

	.fund {
		text-align: center;
		margin: 4rem 0 6rem;
	}

	.overlap {
		padding: 6rem;
		color: var(--text-color-light);
		margin-top: -10rem;
		background: var(--color-primary);
	}

	.overlap h2 {
		margin-top: 1rem;
	}

	.overlap p {
		margin: 1rem 0 2rem 0;
	}
</style>
