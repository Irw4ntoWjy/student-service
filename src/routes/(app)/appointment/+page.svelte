<script lang="ts">
	import { page } from '$app/state';
	import QRCode from '@castlenine/svelte-qrcode';
	import { Button } from 'bits-ui';

	const onsubmit = async (event: Event) => {
		event.preventDefault();
		const response = await fetch('?/createAppointment', {
			method: 'POST',
			body: JSON.stringify(textareaValue),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		const result = await response.json();
		if (response.ok) {
			appointmentNumber = JSON.parse(result.data)[0];
			data = `${page.url}/${appointmentNumber}`;
		}
	};

	let appointmentNumber: string | undefined = $state(undefined);
	let data: string | undefined = $state(undefined);
	let textareaValue: string | undefined = $state(undefined);
</script>

{#if data && !isNaN(Number(appointmentNumber))}
	<div class="flex min-h-[calc(100vh_-_8rem)] w-full flex-col items-center justify-center">
		<QRCode {data} />
	</div>
{:else}
	<div class="flex flex-col gap-4">
		<div class="flex flex-col">
			<span> Lampirkan alasan membuat appointment dibawah ini: </span>
			<textarea name="textarea" class="h-[100px] w-[400px] border" bind:value={textareaValue}
			></textarea>
		</div>

		<form action="?/createAppointment" method="post" {onsubmit}>
			<Button.Root
				class="shadow-mini hover:bg-dark/95 active:scale-98 inline-flex h-10
				w-auto items-center justify-center rounded-md bg-primary
				px-[21px] text-sm font-semibold text-background active:transition-all"
				type="submit"
			>
				Ambil nomor antrian
			</Button.Root>
		</form>
	</div>
{/if}
