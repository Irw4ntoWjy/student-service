<script lang="ts">
	import type { Snippet } from 'svelte';
	import SiteHeader from '../../lib/components/page/site-header.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<SiteHeader />
<main id="main" class="scroll-smooth">
	<div class="px-6">
		<div class="grid pb-4 xl:grid-cols-[1fr,auto] xl:space-x-6">
			<div class="order-last xl:order-first xl:px-4">
				{@render children()}
			</div>
		</div>
	</div>
</main>
