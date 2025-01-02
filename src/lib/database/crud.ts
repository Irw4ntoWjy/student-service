import { insertRow, selectRow } from './connection';

export const createAppointment = async (value: string) => {
	return await insertRow('current_number', value);
};

export const getCurrentAppointmentNumber = async () => {
	return await selectRow('select current_number from appointment order by created_at desc limit 1');
};
