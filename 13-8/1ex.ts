//Apple exercise

interface Props {
    s: number;
    t: number;
    a: number;
    b: number;
    apples: number[];
    oranges: number[];
}

const startPoint = 7;
const endPoint = 10;
const appleLoc = 4;
const orangeLoc = 12;

const samHouse = [7, 10];

function countApplesAndOranges({ s, t, a, b, apples, oranges }: Props) {
    const applesLanded = apples.map(apple => a + apple);
    const orangesLanded = oranges.map(orange => b + orange);

    const applesOnHouse = applesLanded.filter(position => position >= s && position <= t).length;
    const orangesOnHouse = orangesLanded.filter(position => position >= s && position <= t).length;

    console.log(`Apples on house: ${applesOnHouse}`);
    console.log(`Oranges on house: ${orangesOnHouse}`);
}


const exampleProps: Props = {
    s: startPoint,
    t: endPoint,
    a: appleLoc,
    b: orangeLoc,
    apples: [2, 3, -4],
    oranges: [3, -2, -4]
};

countApplesAndOranges(exampleProps);
