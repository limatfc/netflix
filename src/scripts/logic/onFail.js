export function onFail(error) {
  const string = JSON.stringify(error);
  const split = string.split("/");
  const array = split[1].split(",");
  const array2 = array[0].replace(/-/g, " ");
  const edit = array2.slice(0, -1);
  return edit;
}
