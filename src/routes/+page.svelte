<script lang="ts">
	import InputGroup from '$lib/InputGroup.svelte';
	import Section from '$lib/Section.svelte';
	import Nav from '$lib/Nav.svelte';
	import Hero from '$lib/Hero.svelte';
	import Viz from '$lib/Viz.svelte';
	import Split from '$lib/Split.svelte';

	const viz = {
		angleX: -0.35 * Math.PI,
		angleY: -0.3 * Math.PI,
		angleZ: -0.3 * Math.PI,
		zoom: 3.5,
		perspective: 10.0
	};
</script>

<svelte:head>
	<title>Resolve</title>
</svelte:head>

<Nav class="dark" />

<Section class="hero wide dark">
	<div class="viz-container">
		<div class="viz">
			<Viz {...viz} />
		</div>
	</div>

	<div class="gradient"></div>

	<div class="hero-container">
		<Hero heading={'Resolve'} paragraph={'Information technology professionals with a vision.'} />

		<InputGroup>
			<a class="button big secondary" href="mailto:johan@resolve.works">Contact Us</a>
		</InputGroup>
	</div>
</Section>

<Section class="white border-top">
	<div>
		<Split>
			{#snippet left()}
				<h2>Empower humans through technology</h2>
			{/snippet}
			{#snippet right()}
				<p class="features">Consultancy and tooling for research organizations</p>
			{/snippet}
		</Split>

		<p>
			Our vision is for technology to empower humans. Empower them to make sense of the void,
			empower them to find answers, and empower them to dare to ask questions.
		</p>

		<p>Will you explore with us? <a href="mailto:johan@resolve.works">Contact us</a>.</p>
		<br />
	</div>
</Section>

<Section>
	<div>
		<h3>Projects</h3>
		<div class="project">
			<div class="logo">
				<div class="placeholder">
					<h4>Insight</h4>
				</div>
			</div>
			<div class="text">
				<h4>Insight</h4>
				<p class="url">
					<a href="https://resolve.works/projects/insight">https://resolve.works/projects/insight</a
					>
				</p>

				<p>Insight is the knowledge-base you build with your colleagues.</p>
			</div>
		</div>
	</div>
</Section>

<style>
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

	.gradient {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(125deg, var(--color-navigation-darker) 40%, transparent 60%);
	}

	.viz-container {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}

	.hero-container {
		position: relative;
		z-index: 1;
	}

	.viz {
		position: absolute;
		left: 0;
		top: 0;
		right: -50%;
		bottom: -50%;
	}

	.project {
		display: grid;
		grid-template-columns: 1fr 5fr;
		gap: 2rem;
		background: var(--color-white);
		padding: 2rem;
		margin-bottom: 4rem;
	}

	.project h4 {
		font-size: 1.4rem;
		margin-bottom: 0;
	}

	.project .url {
		margin-top: 0.5rem;
	}

	.project .logo .placeholder {
		width: 100%;
		aspect-ratio: 1;
		background: var(--color-primary);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.project .logo .placeholder h4 {
		color: var(--text-color-light);
		margin: 0;
	}
</style>
