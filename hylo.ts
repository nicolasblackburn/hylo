/**
 * Implementation of the hylomorphism transformation. See [https://maartenfokkinga.github.io/utwente/mmf91m.pdf].
 * @param pred - Termination function; returns true if the folding should continue for some generator, false otherwise
 * @param next - A function which given a generator returns a tuple containing the next element and a new generator
 * @param add - Combines two elements into one
 * @param nil - The return value in case the termination function is true for the initial generator
 * @param x - The initial generator
 */
export function hylo<S, T, U>(pred: (s: S) => boolean, next: (s: S) => [T, S], add: (t: T, u: U) => U, nil: U, x: S): U {
    let y = nil;
    while (pred(x)) {
        const [a, b] = next(x);
        y = add(a, y);
        x = b;
    }
    return y;
}