<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const response = await fetch('?/createAppointment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		const result = await response.json();
		console.log(result);
		console.log(JSON.parse(result.data)[0]);
	};
</script>

<form
	action="?/createAppointment"
	method="post"
	onsubmit={handleSubmit}
	enctype="application/x-www-form-urlencoded"
>
	<Button type="submit">Appointment</Button>
</form>
