<script lang="ts">
	import { cn } from '$lib/utils';

	let { title, description, src }: { title: string; description: string; src: string } = $props();
</script>

<div
	class={cn(
		'group max-w-sm rounded-2xl border border-neutral-500/10 dark:border-white/10',
		'dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]',
		'group transform-gpu transition-transform hover:scale-[1.01]',
		'relative bg-gray-50 dark:bg-neutral-800/80'
	)}
>
	<div
		class="relative z-0 h-48 translate-y-2 -rotate-6 p-6 text-center text-xl font-bold tracking-tighter text-neutral-500/20"
	>
		<img alt="IMG" {src} width="600" height="400" class="w-full rounded-2xl" />
	</div>

	<div class="relative z-10 h-auto bg-white/50 p-6 backdrop-blur-md dark:bg-neutral-800/50">
		<h6
			class="mb-2 origin-left transform-gpu text-xl font-semibold tracking-tighter text-gray-600 transition-all group-hover:scale-90 dark:text-gray-300"
		>
			{title}
		</h6>
		<p class="text-left text-sm tracking-tight dark:text-gray-400">
			{description}
		</p>
	</div>
</div>
