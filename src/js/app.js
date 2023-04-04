export default function sortHeroesByHealth(arg = []) {
  return arg.sort((a, b) => b.health - a.health);
}
