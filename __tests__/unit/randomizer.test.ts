import { getRandomItemFromList } from "@app/server/utils";

describe("randomizer", () => {
  const source = ["one", "two", "three", "four"];
  const match = /one|two|three|four$/;

  test("can get two random items from list of strings", () => {
    const data = getRandomItemFromList(source);
    expect(data).toMatch(match);
    expect(data).toMatch(" ");
  });
  test("can get one random item from list of strings", () => {
    const data = getRandomItemFromList(source, false);
    expect(data).toMatch(match);
    expect(data).not.toMatch(" ");
  });
});
