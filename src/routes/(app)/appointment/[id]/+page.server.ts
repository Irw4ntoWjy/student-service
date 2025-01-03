import { getAppointmentByCurrentNumber } from '$lib/database/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const appointment = await getAppointmentByCurrentNumber(params.id);

	return {
		appointment
	};
};
