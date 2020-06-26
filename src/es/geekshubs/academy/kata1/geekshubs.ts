export function _method(value: number) :string {
    return "xavi"+value
}

const SALTO_LINEA = "\n";

export function fizzBuzz(it: number) :string {
    var res = "";
    for (var i = 1; i <= it; i++) {
        // modulo 3
        if (i % 3 === 0) {
            res += "Fizz"+SALTO_LINEA;
        }
        // modulo 5
        else if (i % 5 === 0) {
            res += "Buzz"+SALTO_LINEA;
        }
        // modulo 3 y 5

        // caso base
        else {
            res += i + SALTO_LINEA;
        }
    }
    return res;
}