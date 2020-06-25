import { _method } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";

describe('Geekhubs Testing', function (){
    
    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = "vicboma1";
        //Act
        var result = _method(1);
        //Assert
        expect(result).toBe(expected);
    });

});