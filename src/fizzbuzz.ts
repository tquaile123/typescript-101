export function fizzbuzz(num: number): string[] {
    let retVal: string[] = [];

    for (let i = 1; i <= num; i++ ) {
        let fizz = (i % 3 === 0);
        let buzz = (i % 5 === 0);

        retVal.push((fizz && buzz) ? "FizzBuzz" : buzz ? "Buzz" : fizz ? "Fizz" : i.toString());
    }

    return retVal;
}

export function fizzbuzz2(num: number): string[] {
    let retVal: string[] = [];

    for (let i = 1; i <= num; i++ ) {
        let fizz = (i % 3 === 0);
        let buzz = (i % 5 === 0);

        if (fizz && buzz) {
            retVal.push("FizzBuzz");
        }
        else if (buzz) {
            retVal.push("Buzz")
        }
        else if (fizz) {
            retVal.push("Fizz");
        }
        else {
            retVal.push(i.toString());
        }
    }

    return retVal;
}