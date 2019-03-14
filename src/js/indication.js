export default function indication({name, health}) {
  let status;
  if (health > 50) {
    status = healthy;
  } else if (health >= 15){
    status = wounded;
  } else {
    status = critical;
  }
  return status;
}
