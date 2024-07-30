function test(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("please provide an array of numbers");
    return;
  }

  numbers.forEach((num) => {
    if (typeof num !== "number") {
      console.log("please provide a number");
      return;
    }

    let n = parseInt(num.toString().slice(1));

    if (num >= 40) {
      let p =
        n >= 3
          ? (console.log(5 - n + num),
            n > 7
              ? (console.log(Math.abs(n - 10) + num), Math.abs(n - 10) + num)
              : num)
          : num;
      console.log(p);
    } else {
      console.log("You failed");
    }
  });
}

test([50, 67, 38, 33]);

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    } else {
      let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
      if (nextMultipleOfFive - grade < 3) {
        return nextMultipleOfFive;
      } else {
        return grade;
      }
    }
  });
}

// Sample Input
const input = [73, 67, 38, 33];

// Sample Output
const output = gradingStudents(input);
console.log(output); // [75, 67, 40, 33]

console.log(Math.ceil(78 / 5) * 5);
