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
        var r1 = 1 | 0;
        var r2 = r0 + r1 | 0;
        r0 = r2 | 0;
        return r0;
        return;
      }
    }
  }
   
}
 
