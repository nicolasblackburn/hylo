"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the hylomorphism transformation. See [https://maartenfokkinga.github.io/utwente/mmf91m.pdf].
 * @param pred - Termination function; returns true if the folding should continue for some generator, false otherwise
 * @param next - A function which given a generator returns a tuple containing the next element and a new generator
 * @param add - Combines two elements into one
 * @param nil - The return value in case the termination function is true for the initial generator
 * @param x - The initial generator
 */
function hylo(pred, next, add, nil, x) {
    var y = nil;
    while (pred(x)) {
        var _a = next(x), a = _a[0], b = _a[1];
        y = add(a, y);
        x = b;
    }
    return y;
}
exports.hylo = hylo;
