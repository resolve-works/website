<script lang="ts">
	interface Props {
		heading: string;
		paragraph: string;
	}

	const { heading, paragraph }: Props = $props();
</script>

<h1>{heading}</h1>

<p>{paragraph}</p>

<style>
	h1 {
		font-size: 2.5rem;
		margin: 1rem 0 1.5rem 0;
	}

	p {
		margin: 0rem 0 2rem 0;
		font-size: 1.1rem;
		line-height: 1.8rem;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 4rem;
			margin: 1rem 0 2rem 0;
		}

		p {
			margin: 0rem 0 3rem 0;
			font-size: 1.2rem;
			line-height: 2rem;
		}
	}
</style>
