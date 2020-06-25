import { _method } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";
import { fizzbuzz } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";

describe('Testing', function (){

    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = "vicboma1";
        //Act
        var result = _method(1);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números primeros',function() {
        //Arrange
        var expected = "1\n2\n";
        //Act
        var result = fizzbuzz(2);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números multiples de 3 para hacer Fizz',function() {
        //Arrange
        var expected = "1\n2\nFizz\n";
        //Act
        var result = fizzbuzz(3);
        //Assert
        expect(result).toBe(expected);
    });

    
    test('Testeo números multiples de 5 para hacer Buzz',function() {
        //Arrange
        var expected = "1\n2\nFizz\n4\nBuzz\n";
        //Act
        var result = fizzbuzz(5);
        //Assert
        expect(result).toBe(expected);
    });

});