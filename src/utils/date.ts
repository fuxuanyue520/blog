import { format, parseISO } from "date-fns";

export function formatDate(
	date: string | Date,
	formatStr: string = "MMMM d, yyyy"
): string {
	const d = typeof date === "string" ? parseISO(date) : date;
	return format(d, formatStr);
}
