<script lang="ts">
	import src from '$lib/assets/UPH-White.png';

	let { classProps }: { classProps: string } = $props();
</script>

<img alt="uph-logo" {src} class={classProps} />
