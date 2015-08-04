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
        r2 = r0 | 0;
        r1 = r2 | 0;
        if (r0 == r1) {
          pc = 0;
          continue;
        }
        throw "fail";
        case 0:
        return;
      }
    }
  }
   
}
 
