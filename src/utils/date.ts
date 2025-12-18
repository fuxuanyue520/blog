import { format, parseISO } from "date-fns";
import { zhCN } from "date-fns/locale";

export function formatDate(
	date: string | Date,
	formatStr: string = "yyyy年MM月dd日"
): string {
	const d = typeof date === "string" ? parseISO(date) : date;
	return format(d, formatStr, { locale: zhCN });
}
