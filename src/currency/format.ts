export const formatToBRL = (value: unknown): string => {
  const num = Number(value);

  if (isNaN(num)) {
    return String(value);
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);
};
