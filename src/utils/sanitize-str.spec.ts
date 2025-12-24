import { sanitizeStr } from './sanitize-str';

describe('sanitizeStr(unit)', () => {
  test('returna uma string vazia quando recebe um valor falsy', () => {
    //@ts-expect-error testando a funcao sem, parametros
    expect(sanitizeStr()).toBe('');
  });
  test('returna uma string vazia quando recebe um valor que nao e uma string', () => {
    //@ts-expect-error testando a funcao com tipagem incorreta
    expect(sanitizeStr(123)).toBe('');
  });
  test('faz o trim da string enviada', () => {
    expect(sanitizeStr('  a  ')).toBe('a');
  });
  test('garante que a string e normalizada com NFC', () => {
    const original = 'e\u0301';
    const expected = 'é';
    expect(expected).toBe(sanitizeStr(original));
  });
});
