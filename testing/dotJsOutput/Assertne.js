function asmf(stdlib, foreign, heap) {
  "use asm";
   
  var i32 = new stdlib.Int32Array(heap);
  var imul = stdlib.Math.imul;
  var truncate = foreign.truncate;
   
  function f(r0) {
    while(true) {
      var pc = -1;
      switch (pc) {
        case -1:
        var r3 = 1 | 0;
        var r4 = r0 + r3 | 0;
        r2 = r4 | 0;
        r1 = r2 | 0;
        if (r0 != r1) {
          pc = 1;
          continue;
        }
        throw "fail";
        case 1:
        return;
      }
    }
  }
   
}
 
