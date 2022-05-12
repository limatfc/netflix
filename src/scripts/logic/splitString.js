export default function splitString(string) {
  if (string.length === 0) return null;

  const split = string.split(",");
  return split;
}
