export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
export function formatDateToDDMMYYYY(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}
