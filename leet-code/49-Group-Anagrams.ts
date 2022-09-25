function groupAnagrams(strs: string[]): string[][] {
  const map = {};

  for (let str of strs) {
    const count: number[] = Array(26).fill(0);

    for (let char of str.split('')) {
      const pos = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[pos]++;
    }

    const key = count.toString();
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }

  return Object.values(map);
}
