<svelte:head>
	<title>resolve</title>
</svelte:head>

<article>
	<main>
		<h1 class="typing-animation" class:complete={is_complete}>{displayed_text}</h1>
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
	</main>
</article>

<style>
	ul {
		list-style: none;
		padding-left: 0;
	}
</style>
