import {
	createAppointmentCode,
	createTable,
	getAppointmentCurrentNumber
} from '$lib/database/server';
import { type Actions } from '@sveltejs/kit';

export const actions = {
	createAppointment: async ({ request }) => {
		createTable();

		const appointmentReason = await request.json();
		const currentAppointmentNumber = await getAppointmentCurrentNumber().then((value) => {
			return value[0]?.current_number || '000';
		});

		const createAppointment = await createAppointmentCode(
			(Number(currentAppointmentNumber) + 1).toString().padStart(3, '0'),
			appointmentReason
		).then((value) => {
			return value;
		});
		return createAppointment;
	}
} satisfies Actions;
