import { DateType } from "../types/date-type.js";
export const formatDate = (date, format = DateType.DEFAULT) => {
    switch (format) {
        case DateType.WEEKDAY_DAY_MONTH_YEAR:
            return date.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });
        case DateType.DAY_MONTH:
            return date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit"
            });
        default:
            return date.toLocaleDateString("pt-BR");
    }
};
