<script lang="ts">
	import InputGroup from '$lib/InputGroup.svelte';
	import Section from '$lib/Section.svelte';
</script>

<svelte:head>
	<title>Resolve</title>
</svelte:head>

<Section>
	<div class="split">
		<div>
			<h1>Insight</h1>

			<p>Insight is the knowledge-base you build with your colleagues.</p>
			<br />

			<InputGroup>
				<a class="button big secondary" href="mailto:insight@resolve.works">Contact Us</a>

				<a class="button big" href="https://insight.resolve.works" target="_blank">Try Insight</a>
			</InputGroup>
		</div>

		<div></div>
	</div>
</Section>

<section>
	<div>
		<p>
			We are IT professionals with a vision. That vision is for technology to empower humans.
			Empower them to make sense of the void, empower them to find answers, and empower them to dare
			to ask questions.
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
</section>

<style>
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
