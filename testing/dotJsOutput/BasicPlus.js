function asmf(stdlib, foreign, heap) {
  "use asm";
   
  var int32 = new stdlib.Int32Array(heap);
   
  function f(sp) {
    if (sp == null) {
      sp = 0;
    }
    while(true) {
      var pc = -1;
      switch (pc) {
        case -1:
        int32[3+sp] = 2;
        int32[4+sp] = int32[0+sp] * int32[3+sp] | 0;
        int32[0+sp] = int32[4+sp] | 0;
        int32[5+sp] = int32[1+sp] / int32[2+sp] | 0;
        int32[1+sp] = int32[5+sp] | 0;
        int32[6+sp] = int32[0+sp] + int32[1+sp] | 0;
        int32[7+sp] = int32[6+sp] - int32[2+sp] | 0;
        return 7+sp;
        return;
      }
    }
  }
   
}
 
