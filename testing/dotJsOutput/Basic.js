function asmf(stdlib, foreign, heap) {
  "use asm";
   
  var int32 = new stdlib.Int32Array(heap);
   
  function f(sp) {
    while(true) {
      var pc = -1;
      switch (pc) {
        case -1:
        int32[1+sp] = 1;
        int32[2+sp] = int32[0+sp] + int32[1+sp] | 0;
        int32[0+sp] = int32[2+sp] | 0;
        return 0+sp;
        return;
      }
    }
  }
   
}
 
