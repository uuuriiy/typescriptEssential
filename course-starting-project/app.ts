// Union type
// Literal types
// Aliases types

type Combine = number | string;
type ResultDescription = 'as number' | 'as text'

function combine(n1: Combine, n2: Combine, resultType: ResultDescription) {
    let res;

    if (typeof n1 === "number" && typeof n2 === "number" || resultType === 'as number') {
        res = +n1 + +n2;
    } else {
        res = n1.toString() + n2.toString();
    }

    return res;  
}

console.log(combine(20, 25, 'as number'));

console.log(combine('20', '25', 'as number'));

console.log(combine('Max', 'Ana', 'as text'));
