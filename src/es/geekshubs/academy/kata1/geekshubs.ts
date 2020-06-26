export function _method(value: number) :string {
    return "xavi"+value
}

export function fizzBuzz(it: number) :string {
    var res = "";
    for (var i = 1; i <= it; i++) {
        // modulo 3
        if (i % 3 === 0) {
            res += "Fizz\n";
        }
        // modulo 5

        // modulo 3 y 5

        // caso base
        else {
            res += i + "\n";
        }
    }
    return res;
}