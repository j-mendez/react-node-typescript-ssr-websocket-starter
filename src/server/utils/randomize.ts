import { names } from "@app/server/static";

/**
 * Returns random item(s) from array of string.
 *
 * @param {string[]} list The data to get values from.
 * @param {boolean} multiple Determine if one or two items returned. #TODO:Refactor (n)-items
 * @return {string} list[random] random one or two items.
 */
function getRandomItemFromList(
  list: string[] = names,
  multiple: boolean = true
): string {
  return list?.length
    ? list[Math.floor(Math.random() * list.length)] +
        (multiple && list.length >= 2
          ? " " + list[Math.floor(Math.random() * list.length)]
          : "")
    : "";
}

export { getRandomItemFromList };
