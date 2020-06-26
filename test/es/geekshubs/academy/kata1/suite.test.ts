import { _method, fizzBuzz } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";

describe('Testing', function (){
    
    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = "xavi1";
        //Act
        var result = _method(1);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números primeros', function () {
        //Arrange
        var expected = "1\n2\n";
        //Act
        var result = fizzBuzz(2);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números múltiplos de 3 para hacer Fizz', function () {
        //Arrange
        var expected = "1\n2\n\Fizz\n";
        //Act
        var result = fizzBuzz(3);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números múltiplos de 5 para hacer Buzz', function () {
        //Arrange
        var expected = "1\n2\n\Fizz\n4\nBuzz\n";
        //Act
        var result = fizzBuzz(5);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números múltiplos de 3 y 5 para hacer FizzBuzz', function () {
        //Arrange
        var expected = "1\n2\n\Fizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n";
        //Act
        var result = fizzBuzz(15);
        //Assert
        expect(result).toBe(expected);
    });

});



    


