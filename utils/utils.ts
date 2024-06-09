export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isPhone(phone: string): boolean {
  const phoneRegex = /^\+77\d{8,12}$/;
  return phoneRegex.test(phone);
}