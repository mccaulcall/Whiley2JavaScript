function asmf(stdlib, foreign, heap) {
  "use asm";
   
  var int32 = new stdlib.Int32Array(heap);
   
  function f(sp) {
    while(true) {
      var pc = -1;
      switch (pc) {
        case -1:
        int32[3+sp] = 1;
        int32[4+sp] = int32[0+sp] + int32[3+sp] | 0;
        int32[2+sp] = int32[4+sp] | 0;
        int32[1+sp] = int32[2+sp] | 0;
        if (int32[0+sp] != int32[1+sp]) {
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
 
