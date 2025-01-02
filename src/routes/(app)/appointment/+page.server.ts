import { createAppointment, getCurrentAppointmentNumber } from '$lib/database/crud';
import { type Actions } from '@sveltejs/kit';

export const actions = {
	createAppointment: async () => {
		const currentAppointmentNumber = await getCurrentAppointmentNumber().then((value) => {
			return value.rows[0]?.current_number || '000';
		});

		const tes = await createAppointment(
			(Number(currentAppointmentNumber) + 1).toString().padStart(3, '0')
		).then((value) => {
			console.log(value.rows[0]?.current_number);
			return value.rows[0]?.current_number;
		});
		console.log(tes, typeof tes);
		console.log({ potato: tes });
		return tes;
	}
} satisfies Actions;
