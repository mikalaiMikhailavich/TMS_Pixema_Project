export const joinedArray = <T>(
  array: T[],
  joinSymbal: string,
  name: string
): string =>
  array.map((element) => element[`${name}` as keyof T]).join(joinSymbal);
