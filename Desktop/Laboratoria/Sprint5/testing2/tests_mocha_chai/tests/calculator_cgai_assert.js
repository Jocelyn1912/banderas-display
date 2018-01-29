//Importando interfaz chai
var assert = require('chai').assert;
//Importando fichero de pruebas
var calculator = require('../app/calculator');


//Describe:describe pruebas relacionadas entre sí
describe("Calcultator tests using ASSERT interface from CHAI module: ", function() {
  describe("Check addTested Function: ", function() {
    //Cada elemento it es una prueba
    it("Check the returned value using: assert.equal(value,'value'): ", function() {
      result = calculator.addTested("text");
      assert.equal(result, "text tested");
    });
    it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
      result = calculator.addTested("text");
      assert.typeOf(result, "string");
    });
    it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
      result = calculator.addTested("text");
      assert.lengthOf(result, 11);
    });
  });
});
