// UK Vehicle Registration Number (VRN) Validation and Formatting Utility

export interface ValidationResult {
  isValid: boolean;
  cleanInput: string;
  formatted: string;
  error?: string;
  formatType?: 'current' | 'prefix' | 'suffix' | 'cherished';
}

/**
 * Normalises raw user input by converting to uppercase, trimming,
 * and stripping non-alphanumeric characters.
 */
export function sanitizeVrn(input: string): string {
  if (!input) return '';
  return input.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

/**
 * Validates whether an input resembles a legitimate UK vehicle registration number.
 * Supports:
 * - Current format (2001 to present): e.g. AB51 CDE (2 letters, 2 digits, 3 letters)
 * - Prefix format (1983 - 2001): e.g. A123 BCD (1 letter, 1-3 digits, 3 letters)
 * - Suffix format (1963 - 1983): e.g. ABC 123A (3 letters, 1-3 digits, 1 letter)
 * - Cherished / Dateless (pre-1963 & NI): e.g. 1 ABC, ABC 1, 1234 AB, AB 1234
 */
export function validateUkRegistration(rawInput: string): ValidationResult {
  const trimmed = rawInput ? rawInput.trim() : '';

  if (!trimmed) {
    return {
      isValid: false,
      cleanInput: '',
      formatted: '',
      error: 'Please enter a vehicle registration number.',
    };
  }

  // Check for invalid characters (anything not letters, numbers, spaces)
  if (/[^A-Za-z0-9\s]/.test(trimmed)) {
    return {
      isValid: false,
      cleanInput: sanitizeVrn(trimmed),
      formatted: trimmed.toUpperCase(),
      error: 'Registration contains invalid characters. Only letters and numbers are permitted.',
    };
  }

  const clean = sanitizeVrn(trimmed);

  if (clean.length < 2) {
    return {
      isValid: false,
      cleanInput: clean,
      formatted: clean,
      error: 'Registration is too short. UK registrations are between 2 and 7 characters.',
    };
  }

  if (clean.length > 8) {
    return {
      isValid: false,
      cleanInput: clean,
      formatted: clean,
      error: 'Registration is too long. UK registrations have a maximum of 7 characters (or 8 for special plates).',
    };
  }

  // 1. Current / Modern Style (2001 - Present): 2 letters, 2 digits, 3 letters (e.g. BD51 SMR, AB12 CDE)
  // Modern format does not use 'I' or 'Z' for the first two letters (area code)
  const currentRegex = /^[A-HK-PR-SV-WY][A-HJ-PR-TV-Y][0-9]{2}[A-Z]{3}$/;
  if (currentRegex.test(clean)) {
    const formatted = `${clean.slice(0, 4)} ${clean.slice(4)}`;
    return {
      isValid: true,
      cleanInput: clean,
      formatted,
      formatType: 'current',
    };
  }

  // 2. Prefix Style (1983 - 2001): 1 letter, 1 to 3 numbers, 3 letters (e.g. A123 BCD, H789 GKL)
  const prefixRegex = /^[A-Z][0-9]{1,3}[A-Z]{3}$/;
  if (prefixRegex.test(clean)) {
    const numbersEnd = clean.length - 3;
    const formatted = `${clean.slice(0, numbersEnd)} ${clean.slice(numbersEnd)}`;
    return {
      isValid: true,
      cleanInput: clean,
      formatted,
      formatType: 'prefix',
    };
  }

  // 3. Suffix Style (1963 - 1983): 3 letters, 1 to 3 numbers, 1 letter (e.g. ABC 123A, BMW 123T)
  const suffixRegex = /^[A-Z]{3}[0-9]{1,3}[A-Z]$/;
  if (suffixRegex.test(clean)) {
    const formatted = `${clean.slice(0, 3)} ${clean.slice(3)}`;
    return {
      isValid: true,
      cleanInput: clean,
      formatted,
      formatType: 'suffix',
    };
  }

  // 4. Cherished / Dateless / Northern Ireland (pre-1963 & transfers):
  // 1-4 numbers followed by 1-3 letters, OR 1-3 letters followed by 1-4 numbers
  const datelessNumberFirst = /^[0-9]{1,4}[A-Z]{1,3}$/;
  const datelessLetterFirst = /^[A-Z]{1,3}[0-9]{1,4}$/;

  if (datelessNumberFirst.test(clean) || datelessLetterFirst.test(clean)) {
    return {
      isValid: true,
      cleanInput: clean,
      formatted: clean,
      formatType: 'cherished',
    };
  }

  // General fallback for valid-looking character lengths that might be personalized plates
  const generalUkRegex = /^[A-Z0-9]{2,7}$/;
  if (generalUkRegex.test(clean) && clean.length >= 2 && clean.length <= 7) {
    // If it has at least one letter and one number, or is a recognized personalized plate
    const hasLetters = /[A-Z]/.test(clean);
    const hasNumbers = /[0-9]/.test(clean);

    if (hasLetters && hasNumbers) {
      return {
        isValid: true,
        cleanInput: clean,
        formatted: clean,
        formatType: 'cherished',
      };
    }
  }

  return {
    isValid: false,
    cleanInput: clean,
    formatted: clean,
    error: 'Does not match standard UK registration formats (e.g. AB12 CDE, A123 BCD, or 123 ABC).',
  };
}
