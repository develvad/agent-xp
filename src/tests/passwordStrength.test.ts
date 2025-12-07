import { evaluatePasswordStrength } from '../core/passwordStrength';

describe('The Password Strength Evaluator', () => {
  it('considers a password strong when it meets all criteria', () => {
    const password = 'Abcdef1!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('strong');
  });

  it('considers a password weak when it has fewer than 8 characters', () => {
    const password = 'Abcd1!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('weak');
  });

  it('considers a password medium when it has no uppercase letters but meets 3 criteria', () => {
    const password = 'abcdefg1!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers a password medium when it has no lowercase letters but meets 3 criteria', () => {
    const password = 'ABCDEFG1!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers a password medium when it has no numbers but meets 3 criteria', () => {
    const password = 'Abcdefgh!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers a password medium when it has no special characters but meets 3 criteria', () => {
    const password = 'Abcdefg1';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers a password medium when it meets 3 of 4 additional criteria', () => {
    const password = 'Abcdefgh1';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers a password medium when it meets 2 of 4 additional criteria', () => {
    const password = 'Abcdefgh';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers a password weak when it meets only 1 of 4 additional criteria', () => {
    const password = 'abcdefgh';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('weak');
  });

  it('considers a password weak when it meets 0 of 4 additional criteria', () => {
    const password = '--------';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('weak');
  });
});
