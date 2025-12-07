export type PasswordStrength = 'weak' | 'medium' | 'strong';

export function evaluatePasswordStrength(password: string): PasswordStrength {
  if (isTooShort(password)) return 'weak';

  const criteriaCount = countCriteriaMet(password);

  if (criteriaCount === 4) return 'strong';
  if (criteriaCount >= 2) return 'medium';
  return 'weak';
}

function isTooShort(password: string): boolean {
  const minimumLength = 8;
  return password.length < minimumLength;
}

function countCriteriaMet(password: string): number {
  const criteria = [hasUppercase, hasLowercase, hasNumber, hasSpecialCharacter];
  return criteria.filter((criterion) => criterion(password)).length;
}

function hasUppercase(password: string): boolean {
  return /[A-Z]/.test(password);
}

function hasLowercase(password: string): boolean {
  return /[a-z]/.test(password);
}

function hasNumber(password: string): boolean {
  return /[0-9]/.test(password);
}

function hasSpecialCharacter(password: string): boolean {
  return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}
