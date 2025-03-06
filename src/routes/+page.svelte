<script lang="ts">
	import InputGroup from '$lib/InputGroup.svelte';
	import Section from '$lib/Section.svelte';
	import Nav from '$lib/Nav.svelte';
	import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
	<title>Resolve</title>
</svelte:head>

<Nav class="dark" />

<Section class="hero wide dark">
	<div class="split">
		<div>
			<Hero heading={'Resolve'} paragraph={'We are IT professionals with a vision.'} />

			<InputGroup>
				<a class="button big secondary" href="mailto:johan@resolve.works">Contact Us</a>
			</InputGroup>
		</div>

		<div></div>
	</div>
</Section>

<Section>
	<div>
		<p>
			That vision is for technology to empower humans. Empower them to make sense of the void,
			empower them to find answers, and empower them to dare to ask questions.
		</p>

		<p>Will you explore with us? <a href="mailto:johan@resolve.works">Contact us</a></p>
		<br />

		<h3>Projects</h3>
		<ul>
			<li>
				<a href="/projects/insight">Insight</a>: The knowledge base for newsrooms.
			</li>
		</ul>
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

	ul {
		list-style: none;
		padding-left: 0;
	}

	section {
		flex-grow: 1;
	}

	section > div {
		max-width: 70rem;
		margin: 0 auto;
	}
</style>
