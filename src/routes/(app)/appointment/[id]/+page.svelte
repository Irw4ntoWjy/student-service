<script lang="ts">
	import { page } from '$app/state';

	const appointmentNumber = page.params.id;
</script>

<span class="flex h-[500px] w-full items-center justify-center text-9xl">{appointmentNumber}</span>
