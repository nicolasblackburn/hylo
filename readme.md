Implementation of the hylomorphism transformation. See [https://maartenfokkinga.github.io/utwente/mmf91m.pdf].

Usage examples:

```
const hylo = require(./dist/hylo).hylo;

// This is equivalent to `[1,2,3].reduce((a, b) => a + b, 0)`;
hylo(x => x.length, x => [x[0], x.slice(1)], (a, b) => a + b, 0, [1,2,3]); // returns 6

// Generating a range array
hylo(x => x < 3, x => [[x], x + 1], (a, b) => a.concat(b), [], 0); // returns [0, 1, 2]
```