const formatCurrency = (value: number): string => {
  return value.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );
}

const formatDate = (date: Date, format: DateType = DateType.DEFAULT): string => {
  switch (format) {
    case DateType.WEEKDAY_DAY_MONTH_YEAR:
      return date.toLocaleDateString(
        "pt-BR",
        {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }
      );
    case DateType.DAY_MONTH:
      return date.toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "2-digit"
        }
      );
    default:
      return date.toLocaleDateString("pt-BR");
  }
}