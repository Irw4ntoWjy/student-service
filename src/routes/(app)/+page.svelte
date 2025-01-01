<script lang="ts">
	import { goto } from '$app/navigation';
	import Card from '$lib/components/ui/card/card.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="mt-4 grid grid-cols-4 items-center justify-items-center gap-8">
	<Card
		title="Student Finance"
		description="Melayani permasalahan-permasalahan dalam administrasi keuangan mahasiswa/i universitas"
		src="https://ctl.uph.edu/wp-content/uploads/2023/12/IMG-1133-06.png"
		onClick={() => goto('/student-finance')}
	/>
	<Card
		title="General Affairs"
		description="Melayani permasalahan-permasalahan peminjaman ruangan serta properti universitas"
		src="https://ctl.uph.edu/wp-content/uploads/2023/07/Kenneth-Girvan.jpg"
		onClick={() => console.log('clicked')}
	/>

	<Button
		onclick={() => {
			goto('/appointment');
		}}>Appointment</Button
	>
</div>

<!-- <Card title="Study Program Administration" description="" image="" /> -->
<!-- <Card title="IT Support" image="" description="" />
<Card title="Academic Administratrion" image="" description="" />
<Card title="Student Feedback Question" image="" description="" />
<Card title="Student Development and Alumni Engagement" image="" description="Melayani " />
<Card title="Admission" image="" description="" />
<Card title="Head of Medan Campus" image="" description="" /> -->
