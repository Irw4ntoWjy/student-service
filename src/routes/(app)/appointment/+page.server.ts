import { createAppointmentCode, getAppointmentCurrentNumber } from '$lib/database/server';
import { type Actions } from '@sveltejs/kit';

export const actions = {
	createAppointment: async () => {
		const currentAppointmentNumber = await getAppointmentCurrentNumber().then((value) => {
			return value || '000';
		});

		const tes = await createAppointmentCode(
			(Number(currentAppointmentNumber) + 1).toString().padStart(3, '0')
		).then((value) => {
			return value;
		});
		return tes;
	}
} satisfies Actions;
