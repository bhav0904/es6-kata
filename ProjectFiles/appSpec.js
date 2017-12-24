describe('let keyword', function() {
  it('revise var behavior: hoisted to the top of the function', function() {

    function doWorkWithVar(flag) {
        if (flag) {
              var x = 5;
        }
        return x;
    }

    expect(doWorkWithVar(true)).toEqual(5);
    expect(doWorkWithVar(false)).toBeUndefined();
  });

  it('let is block scoped', function() {

    // Define x using the let keyword in the right place so the test passes
      function doWorkWithLet(flag) {
        return x;
      }

      expect(doWorkWithLet(true)).toEqual(5);
      expect(doWorkWithLet(false)).toBeUndefined();
    });
});
