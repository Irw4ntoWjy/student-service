<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import QRCode from '@castlenine/svelte-qrcode';

	const onsubmit = async (event: Event) => {
		event.preventDefault();
		const response = await fetch('?/createAppointment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		const result = await response.json();
		if (response.ok) {
			data = `${page.url.pathname}/${JSON.parse(result.data)[0]}`;
		}
	};

	let data: string | undefined = $state(undefined);
</script>

{#if data}
	<QRCode {data} />
{:else}
	<form action="?/createAppointment" method="post" {onsubmit}>
		<Button type="submit">Appointment</Button>
	</form>
{/if}
