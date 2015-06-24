function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = null;
  r1 = r2;
  r0 = r1;
   //assume 
  var r5 = 1;
   //newrecord %6 = (%5, %0) : {int data,null next}
  r0 = r6;
   //assume 
  var r9 = 2324;
   //newrecord %10 = (%9, %0) : {int data,{int data,null next} next}
  r0 = r10;
   //assume 
  var r13 = 2;
   //newrecord %14 = (%13, %0) : {int data,{int data,{int data,null next} next} next}
  r0 = r14;
   //assume 
  return;
}}}
