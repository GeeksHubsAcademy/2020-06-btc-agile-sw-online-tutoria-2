export function _method(value: number) : string {
    return "vicboma"+value
}

const SALTO_LINEA = "\n";

export function fizzbuzz(it: number) : string {
    var res = ""
    for(var i = 1; i < it+1 ; i++){
        // modulo 3 y 5
        if(i % 5 === 0 && i % 3 == 0)
            res += "FizzBuzz"+SALTO_LINEA
        // modulo 5 
        else if(i % 5 === 0)
            res += "Buzz"+SALTO_LINEA
        // modulo 3
        else if(i % 3 === 0 )
            res += "Fizz"+SALTO_LINEA;   
        
        // caso base
        else 
            res += i + SALTO_LINEA
    }
    return res;
}