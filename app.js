function sortHeroesByHealth(arg = []) {
  return arg.sort((a, b) => b.health - a.health);
}

// sortHeroesByHealth([
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ])
