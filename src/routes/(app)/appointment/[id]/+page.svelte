<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';

	const appointmentNumber = page.params.id;

	let { data }: { data: PageData } = $props();
</script>

<div class="flex min-h-[calc(100vh_-_8rem)] w-full flex-col items-center justify-center">
	<span class="text-9xl">{appointmentNumber}</span>
	<span class="text-lg">
		Alasan melakukan appointment {data.appointment[0].appointment_reason}
	</span>
</div>
