export const formatear = (numero) => {
  return new Intl.NumberFormat("es-Ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numero);
};

export const desformatear = (string) => {
  return parseInt(string.replace(/[$.]/g, ""), 10);
};
