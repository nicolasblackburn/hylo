Implementation of the hylomorphism transformation. See [https://maartenfokkinga.github.io/utwente/mmf91m.pdf].

To install using npm:

```
npm install git+https://git@github.com:nicolasblackburn/hylo.git
```

Usage examples:

```
const hylo = require(hylo).hylo;

// This is equivalent to `[1,2,3].reduce((a, b) => a + b, 0)`
hylo(x => x.length, x => [x[0], x.slice(1)], (a, b) => a + b, 0, [1,2,3]); // returns 6

// Generating an array containing the numbers 0 to 2 inclusively
hylo(x => x < 3, x => [x, x + 1], (a, b) => a.concat([b]), [], 0); returns [0, 1, 2]

// A range function
const range = (arg, ...rest) => {
    if (rest.length === 0) {
        const to = arg;
        return hylo(x => x < to, x => [[x], x + 1], (a, b) => a.concat(b), [], 0);
    } else if (rest.length === 1) {
        const from = arg;
        const to = rest[0];
        return hylo(x => x < to, x => [[x], x + 1], (a, b) => a.concat(b), [], from);
    } else if (rest.length > 1) {
        const from = arg;
        const [to, step] = rest;
        if (step >= 0) {
            return hylo(x => x < to, x => [[x], x + step], (a, b) => a.concat(b), [], from);
        } else {
            return hylo(x => x > to, x => [[x], x + step], (a, b) => a.concat(b), [], from);
        }
    }
} 
range(3); // returns [0, 1, 2]
range(1, 3); // returns [1, 2]
range(0, -3, -1); // returns [0, -1, -2]
```