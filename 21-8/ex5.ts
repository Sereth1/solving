function matchingLetters(strings: string[], queries: string[]): number[] {
    const results: number[] = [];

    queries.forEach((query) => {
        let count = 0;

        strings.forEach((str) => {

            for (let char of str) {
                if (query.includes(char)) {
                    count++;
                }
            }
        });

        results.push(count);
    });

    return results;
}

