var lengthOfLastWord = function (s) {
  let word = s
    .split(" ")
    .filter((item) => item !== "")
    .splice(-1);
  return word[0].length;
};

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
console.log(lengthOfLastWord("fly me   to   the moon")); // Output: 4
