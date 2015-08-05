function asmf(stdlib, foreign, heap) {
  "use asm";
   
  var int32 = new stdlib.Int32Array(heap);
   
  function f(r0, r1, r2) {
    while(true) {
      var pc = -1;
      switch (pc) {
        case -1:
        var r3 = 2 | 0;
        var r4 = r0 * r3 | 0;
        r0 = r4 | 0;
        var r5 = r1 / r2 | 0;
        r1 = r5 | 0;
        var r6 = r0 + r1 | 0;
        var r7 = r6 - r2 | 0;
        return r7;
        return;
      }
    }
  }
   
}
 
