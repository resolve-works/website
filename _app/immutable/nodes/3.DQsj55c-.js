import{a as s,t as o}from"../chunks/disclose-version.BCpkX4ul.js";import"../chunks/legacy.Bnk6EFc3.js";var a=o(`<article><main><h1>Insight</h1> <p>Insight is the knowledge-base you build with your colleagues.</p> <p>It is a tool aimed at organizations that have to make sense of large amounts of documents, for
			example newsrooms or thinktanks. It is a multi-user system which allows users to ingest sets
			of PDFs. Users can use the <a href="https://github.com/resolve-works/insight-ui">Web GUI</a> or <a href="https://github.com/resolve-works/insight-client">CLI client / Python library</a> to
			add document sets for their own use, or for the whole organization.</p> <p>It was created out of a need to research large FOIA requests without having to read them all.
			So while search is a big part of Insight, the main goal is to allow the user to explore. When
			investigative journalists get access to a set of documents, they often don't know what
			information is in them, or what they are looking for. Insight tries to strip irrelevant
			information away to provide clues about what the interesting bits are, and provides the tools
			to dig deeper when those bits are found.</p> <p>FOIA requests are often not the best quality documents, like scans or documents with censored
			information. To handle these the ingest process OCRs PDFs that have no embedded text layers
			and optimizes the PDF for web viewing. With these optimizations and some
			[magic](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) Insight makes it
			possible to view large PDFs quickly in the browser.</p> <p>The goal of insight is to provide insight into those documents. It aims to achieve that
			through the use of several technologies working in harmony.</p> <ul><li>Keyword search. All documents are indexed and searchable by keyword. The search will
				highlight snippets of the pages that matched the query, and allows the user to navigate to
				hits directly.</li> <li>Semantic search. All documents are embedded and searchable semantically, which means that
				the user can prompt insight to return pages that are semantically similar to the users query</li> <li>Large language models. The results of the semantic search are fed into a LLM that will try
				to answer the users query based on the search results. The LLM is capable of producing
				quotes of the search results, which then can be fed into the keyword search.</li></ul> <p>As Insight develops further, the goal is to make exploring information quicker, easier, and
			generally more fun. We accomplish this through improving the harmony between these
			technologies, with a focus on user-friendly design and performance.</p></main></article>`);function n(e){var t=a();s(e,t)}export{n as component};
