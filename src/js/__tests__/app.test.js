import sortHeroesByHealth from '../app';

test('test function sortHeroesByHealth', () => {
  const result = sortHeroesByHealth([
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 100 },
    { name: 'фея', health: 50 },
  ]);
  expect(result).toEqual([
    { name: 'лучник', health: 100 },
    { name: 'фея', health: 50 },
    { name: 'маг', health: 10 },
  ]);
});
