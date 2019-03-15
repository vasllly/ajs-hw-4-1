import indication from '../src/js/script';

test('should calculate total for purchases', () => {
  const input = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = indication(input);
  expect(received).toBe(expected);
});

test('should calculate total for purchases', () => {
  const input = { name: 'Маг', health: 50 };
  const expected = 'wounded';
  const received = indication(input);
  expect(received).toBe(expected);
});

test('should calculate total for purchases', () => {
  const input = { name: 'Маг', health: 30 };
  const expected = 'wounded';
  const received = indication(input);
  expect(received).toBe(expected);
});

test('should calculate total for purchases', () => {
  const input = { name: 'Маг', health: 15 };
  const expected = 'wounded';
  const received = indication(input);
  expect(received).toBe(expected);
});

test('should calculate total for purchases', () => {
  const input = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = indication(input);
  expect(received).toBe(expected);
});
