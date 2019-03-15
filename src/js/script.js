export default function indication(character) {
  let status;
  if (character.health > 50) {
    status = 'healthy';
  } else if (character.health >= 15) {
    status = 'wounded';
  } else {
    status = 'critical';
  }
  return status;
}
