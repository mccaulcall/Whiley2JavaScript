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
        int32[2+sp] = int32[0+sp] | 0;
        int32[1+sp] = int32[2+sp] | 0;
        if (int32[0+sp] == int32[1+sp]) {
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
 
