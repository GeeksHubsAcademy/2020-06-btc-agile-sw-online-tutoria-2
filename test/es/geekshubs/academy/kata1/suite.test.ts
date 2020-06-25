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

    test('Testeo números multiples de 3 y 5 para hacer FizzBuzz hasta 15',function() {
        //Arrange
        var expected = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n";
        //Act
        var result = fizzbuzz(15);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números multiples de 3 y 5 para hacer FizzBuzz hasta 30',function() {
        //Arrange
        var expected = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n";
        //Act
        var result = fizzbuzz(30);
        //Assert
        expect(result).toBe(expected);
    });

});