export function compareVersionString(a: string, b: string) {
  const [major1, minor1, editorial1] = a.split(".");
  const [major2, minor2, editorial2] = b.split(".");
  if (major1 < major2) {
    return -1;
  }
  if (major1 > major2) {
    return 1;
  }
  if (minor1 < minor2) {
    return -1;
  }
  if (minor1 > minor2) {
    return 1;
  }
  if (editorial1 < editorial2) {
    return -1;
  }
  if (editorial1 > editorial2) {
    return 1;
  }
  return 0;
}
