<script lang="ts">
	import Conversation from '$lib/Conversation.svelte';
	import InputGroup from '$lib/InputGroup.svelte';
	import Icon from '$lib/Icon.svelte';
	import Inode from '$lib/Inode.svelte';
	import Section from '$lib/Section.svelte';
	import Split from '$lib/Split.svelte';
	import Nav from '$lib/Nav.svelte';
	import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
	<title>Resolve - Insight</title>
</svelte:head>

<Nav class="primary" />

<Section class="hero wide primary border-bottom">
	<Split>
		{#snippet left()}
			<Hero
				heading={'Insight'}
				paragraph={'Insight is the knowledge-base you build with your colleagues.'}
			/>

			<InputGroup>
				<a
					class="button big secondary"
					href="https://github.com/resolve-works/insight"
					target="_blank">Github Project</a
				>

				<a class="button big" href="mailto:insight@resolve.works">Contact Us</a>
			</InputGroup>
		{/snippet}

		{#snippet right()}
			<div class="hide-on-mobile">
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
			</div>
		{/snippet}
	</Split>
</Section>

<Section class="white border-top">
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

<Section class="footer spaced dark border-top">
	<div class="overlap">
		<Split>
			{#snippet left()}
				<Hero heading="Curious?" paragraph="Check the github project or get in touch!" />
				<InputGroup>
					<a
						class="button big secondary"
						href="https://github.com/resolve-works/insight"
						target="_blank">Github Project</a
					>

					<a class="button big" href="mailto:insight@resolve.works">Contact Us</a>
				</InputGroup>
				<br />
			{/snippet}

			{#snippet right()}
				<div class="hide-on-mobile">
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
			{/snippet}
		</Split>
	</div>
</Section>

<style>
	h2 {
		font-size: 2rem;
		line-height: 2.8rem;
	}

	h3 {
		font-size: 1.5rem;
		line-height: 2.2rem;
	}

	p {
		font-size: 1.1rem;
		line-height: 1.8rem;
	}

	.features {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-top: 1.5rem;
	}

	@media (min-width: 768px) {
		h2 {
			font-size: 3rem;
			line-height: 4.5rem;
		}

		h3 {
			font-size: 2rem;
			line-height: 3rem;
		}

		p {
			font-size: 1.2rem;
			line-height: 2rem;
		}

		.features {
			font-size: 2rem;
			line-height: 2.5rem;
			margin-top: 3.5rem;
		}
	}

	ul.checks {
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul.checks li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.1rem;
	}

	@media (min-width: 768px) {
		ul.checks {
			flex-direction: row;
			gap: 2rem;
		}

		ul.checks li {
			font-size: 1.2rem;
		}
	}

	.blocks {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		padding: 2rem 0;
	}

	.blocks > div {
		background: var(--color-page);
		padding: 0 1rem;
	}

	.blocks > div .icon {
		--ggs: 2;
		width: 3rem;
		height: 4rem;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.blocks > div h4 {
		font-size: 1.5rem;
		margin: 4rem 0 0.5rem;
	}

	@media (min-width: 768px) {
		.blocks {
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 1rem;
			padding: 4rem 0;
		}

		.blocks > div .icon {
			--ggs: 3;
			width: 4rem;
			height: 5rem;
		}

		.blocks > div h4 {
			font-size: 2rem;
			margin: 8rem 0 1rem;
		}
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
		max-width: 100%;
		text-align: center;
		margin-bottom: 3rem;
	}

	@media (min-width: 768px) {
		.today h3 {
			max-width: 50%;
			margin-bottom: 6rem;
		}
	}

	.funder {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		background: var(--color-white);
		padding: 1.5rem;
	}

	.funder h4 {
		font-size: 1.3rem;
		margin-bottom: 0;
	}

	.funder .url {
		margin-top: 0.5rem;
		word-break: break-all;
	}

	.funder .logo img {
		width: 100%;
		max-width: 120px;
	}

	@media (min-width: 768px) {
		.funder {
			grid-template-columns: 1fr 5fr;
			gap: 2rem;
			padding: 2rem;
		}

		.funder h4 {
			font-size: 1.4rem;
		}

		.funder .url {
			word-break: normal;
		}

		.funder .logo img {
			max-width: none;
		}
	}

	.fund {
		text-align: center;
		margin: 2rem 0 3rem;
	}

	@media (min-width: 768px) {
		.fund {
			margin: 4rem 0 6rem;
		}
	}

	.overlap {
		padding: 1.5rem;
		color: var(--text-color-light);
		margin-top: 0;
		background: var(--color-primary);
	}

	@media (min-width: 768px) {
		.overlap {
			padding: 6rem;
			margin-top: -10rem;
		}
	}

	.overlap h2 {
		margin-top: 1rem;
	}

	.overlap p {
		margin: 1rem 0 2rem 0;
	}

	.hide-on-mobile {
		display: none;
	}

	@media (min-width: 768px) {
		.hide-on-mobile {
			display: block;
		}
	}
</style>
