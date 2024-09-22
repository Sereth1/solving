function greek(str1: string, str2: string): string {
    let answer = "";

    // Use the logical OR (||) operator, not the bitwise OR (|)
    if (str1.includes('Greek') || str2.includes('Creta')) {
        answer = 'I am Greek';
    } else {
        answer = 'I am not a Greek';
    }

    return answer;
}

console.log(greek('I am from Greek', 'I am not a Canadian'));
