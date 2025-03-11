<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import Section from '$lib/Section.svelte';
	import Split from '$lib/Split.svelte';
	import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
	<title>Resolve - Fair Use Policy</title>
</svelte:head>

<Nav class="dark" />

<Section class="hero wide dark border-bottom">
	<Hero heading={'Fair Use Policy'} paragraph={'Guidelines for using Resolve public demo instances.'} />
</Section>

<Section class="white border-top">
	<div>
		<Split>
			{#snippet left()}
				<h2>Overview</h2>
			{/snippet}
			{#snippet right()}
				<p class="features">Guidelines for a quality experience.</p>
			{/snippet}
		</Split>

		<p>
			This Fair Use Policy governs the use of all public demo instances provided by Resolve. Our
			tools are designed to help organizations make sense of complex data and documents through
			innovative technologies. While we encourage you to explore the capabilities of our platforms,
			we must maintain reasonable usage limits to ensure a quality experience for all users.
		</p>
	
		<div class="subsection">
			<h3>Usage Allowances</h3>
			
			<div class="subgroup">
				<h4>Resource-Light Operations</h4>
				<p>
					The following operations generally consume minimal resources and have generous allowances:
				</p>
				<ul class="policy-list">
					<li>
						<strong>Document Processing</strong>: Uploading, OCR processing, and optimization of documents
					</li>
					<li>
						<strong>Data Embedding</strong>: Semantic embedding of documents and data
					</li>
					<li>
						<strong>Standard Searches</strong>: Basic keyword and metadata searches across your uploaded content
					</li>
				</ul>
			</div>

			<div class="subgroup">
				<h4>Resource-Intensive Operations</h4>
				<p>
					The following operations consume significant computational resources and have stricter limits:
				</p>
				<ul class="policy-list">
					<li>
						<strong>Advanced Semantic Search</strong>: Limited to a reasonable number of queries per day
					</li>
					<li>
						<strong>AI/LLM-Powered Analysis</strong>: Limited access to AI-assisted analysis features
					</li>
					<li>
						<strong>Batch Processing</strong>: Processing of large datasets or document collections
					</li>
				</ul>

				<p>
					Specific numerical limits for each tool will be displayed within the respective application
					interfaces.
				</p>
			</div>
		</div>
	
		<div class="subsection">
			<h3>Prohibited Uses</h3>
			<ul class="policy-list">
				<li>Automated or scripted queries that place excessive load on our systems</li>
				<li>Sharing access credentials with unauthorized users</li>
				<li>Using public demo instances for ongoing production workloads</li>
				<li>Uploading sensitive, confidential, or personal information</li>
				<li>Any use that violates applicable laws or regulations</li>
			</ul>
		</div>
	
		<div class="subsection">
			<h3>Enforcement</h3>
			<p>
				We monitor usage patterns and reserve the right to temporarily limit or suspend access if we
				detect usage that exceeds reasonable limits or violates this policy. We will attempt to notify
				users when approaching usage limits.
			</p>
		</div>
	
		<div class="subsection">
			<h3>Commercial & Custom Agreements</h3>
			<p>
				Our public demo instances are intended for evaluation purposes only. For organizations
				requiring:
			</p>
			<ul class="policy-list">
				<li>Higher usage limits</li>
				<li>Dedicated resources</li>
				<li>SLAs or compliance guarantees</li>
				<li>Custom integrations</li>
				<li>Ongoing production use</li>
			</ul>
			<p>
				Please <a href="mailto:johan@resolve.works">contact us</a> to discuss a commercial agreement tailored to your organization's specific needs.
			</p>
		</div>
	
		<div class="subsection">
			<h3>Changes to this Policy</h3>
			<p>
				We may update this Fair Use Policy from time to time as our services evolve. Significant
				changes will be communicated to users via email or through our platforms.
			</p>
		</div>

		<div class="footer">
			<p>Last updated: March 11, 2025</p>
			<p>
				For questions regarding this policy or to discuss custom hosting arrangements, please
				<a href="mailto:johan@resolve.works">contact us</a>.
			</p>
		</div>
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
		margin-bottom: 1.5rem;
		margin-top: 2rem;
	}
	
	h4 {
		font-size: 1.3rem;
		line-height: 1.8rem;
		margin-bottom: 1rem;
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
			margin-top: 3rem;
		}
		
		h4 {
			font-size: 1.5rem;
			line-height: 2.2rem;
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
	
	.subsection {
		margin-bottom: 3rem;
	}
	
	.subgroup {
		margin-bottom: 2rem;
	}
	
	.policy-list {
		list-style: disc;
		padding-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-bottom: 1.5rem;
	}

	.policy-list li {
		font-size: 1.1rem;
		padding-left: 0.5rem;
	}
	
	@media (min-width: 768px) {
		.policy-list li {
			font-size: 1.2rem;
		}
		
		.subsection {
			margin-bottom: 4rem;
		}
		
		.subgroup {
			margin-bottom: 3rem;
		}
	}
	
	.footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}
	
	.footer p {
		font-size: 1rem;
		line-height: 1.6rem;
		color: var(--text-color-muted);
	}
</style>