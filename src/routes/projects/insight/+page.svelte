<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Conversation from '$lib/Conversation.svelte';
	import InputGroup from '$lib/InputGroup.svelte';
	import Icon from '$lib/Icon.svelte';
</script>

<Section is_primary={true}>
	<div class="split hero">
		<div>
			<h1>Insight</h1>

			<p>Insight is the knowledge-base you build with your colleagues.</p>
			<br />

			<InputGroup>
				<a class="button secondary" href="mailto:insight@resolve.works">Contact Us</a>

				<a class="button" href="https://insight.resolve.works">Try Insight</a>
			</InputGroup>
		</div>

		<div>
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
	</div>
</Section>

<Section>
	<div class="features">
		<div class="split">
			<div>
				<h2>Make sense of documents</h2>
			</div>

			<div>
				<p>Keyword search and conversations with a generative AI model.</p>
			</div>
		</div>

		<ul class="checks">
			<li>
				<Icon class="gg-check-o" /> Multi-user
			</li>

			<li>
				<Icon class="gg-check-o" /> Store large volumes
			</li>

			<li>
				<Icon class="gg-check-o" /> Web GUI + CLI interface
			</li>
		</ul>
	</div>

	Insight is an organizational knowledge base designed to store and make sense of large volumes of
	documents through keyword searches and conversations with a generative AI model.

	<p>
		It is a tool aimed at organizations that have to make sense of large amounts of documents, for
		example newsrooms or thinktanks. It is a multi-user system which allows users to ingest sets of
		PDFs. Users can use the <a href="https://github.com/resolve-works/insight-ui">Web GUI</a>
		or <a href="https://github.com/resolve-works/insight-client">CLI client / Python library</a> to add
		document sets for their own use, or for the whole organization.
	</p>
</Section>

<p>
	It is a tool aimed at organizations that have to make sense of large amounts of documents, for
	example newsrooms or thinktanks. It is a multi-user system which allows users to ingest sets of
	PDFs. Users can use the <a href="https://github.com/resolve-works/insight-ui">Web GUI</a>
	or <a href="https://github.com/resolve-works/insight-client">CLI client / Python library</a> to add
	document sets for their own use, or for the whole organization.
</p>

<p>
	It was created out of a need to research large FOIA requests without having to read them all. So
	while search is a big part of Insight, the main goal is to allow the user to explore. When
	investigative journalists get access to a set of documents, they often don't know what information
	is in them, or what they are looking for. Insight tries to strip irrelevant information away to
	provide clues about what the interesting bits are, and provides the tools to dig deeper when those
	bits are found.
</p>

<p>
	FOIA requests are often not the best quality documents, like scans or documents with censored
	information. To handle these the ingest process OCRs PDFs that have no embedded text layers and
	optimizes the PDF for web viewing. With these optimizations and some
	[magic](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) Insight makes it
	possible to view large PDFs quickly in the browser.
</p>

<p>
	The goal of insight is to provide insight into those documents. It aims to achieve that through
	the use of several technologies working in harmony.
</p>

<ul>
	<li>
		Keyword search. All documents are indexed and searchable by keyword. The search will highlight
		snippets of the pages that matched the query, and allows the user to navigate to hits directly.
	</li>
	<li>
		Semantic search. All documents are embedded and searchable semantically, which means that the
		user can prompt insight to return pages that are semantically similar to the users query
	</li>
	<li>
		Large language models. The results of the semantic search are fed into a LLM that will try to
		answer the users query based on the search results. The LLM is capable of producing quotes of
		the search results, which then can be fed into the keyword search.
	</li>
</ul>

<p>
	As Insight develops further, the goal is to make exploring information quicker, easier, and
	generally more fun. We accomplish this through improving the harmony between these technologies,
	with a focus on user-friendly design and performance.
</p>

<style>
	.split {
		display: grid;
		grid-template-columns: 50% 50%;
		gap: 4rem;
	}

	.hero {
		padding: 8rem 0;
		color: var(--text-color-light);
	}

	.hero h1 {
		font-size: 4rem;
		margin: 1rem 0 2rem 0;
	}

	h2 {
		font-size: 3rem;
	}

	.features {
		margin: 2rem 0;
	}

	.features p {
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
	}
</style>
