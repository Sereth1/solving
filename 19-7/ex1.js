function high(string) {
  const words = string.split(" ");

  let highestScoringWord = "";
  let highestScore = 0;

  for (const word of words) {
    const score = [...word].reduce(
      (acc, char) => acc + char.charCodeAt(0) - 96,
      0
    );
    console.log(score);
    //   console.log(`Word: ${word}, Score: ${score}`);
    if (score > highestScore) {
      highestScoringWord = word;
      highestScore = score;
    }
  }

  return highestScoringWord;
}

high("abad");
