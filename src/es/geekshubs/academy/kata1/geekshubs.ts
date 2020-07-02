const SALTO_LINEA = "\n";
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ+BUZZ;
const ZERO = 0;
const TRES = 3;
const CINCO = 5;
const CADENA_VACIA = "";

export function fizzBuzz(it: number) :string {
    var res = CADENA_VACIA;
    for (var i = 1; i <= it; i++) {
        if ((i % TRES === ZERO) && (i % CINCO === ZERO)) {
            res += FIZZBUZZ + SALTO_LINEA;
        } else if (i % TRES === ZERO) {
            res += FIZZ + SALTO_LINEA;
        } else if (i % CINCO === ZERO) {
            res += BUZZ + SALTO_LINEA;
        } else {
            res += i + SALTO_LINEA;
        }
       }
    return res;
}
