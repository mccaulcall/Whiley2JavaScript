function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 1;
  r1 = r2;
  r0 = r1;
   //assume 
  var r5 = 0;
   //newrecord %6 = (%0, %5, %0) : {int lhs,int op,int rhs}
  r0 = r6;
   //assume 
   //newlist %9 = (%0) : [{int lhs,int op,int rhs}]
  r0 = r9;
   //assume 
  var r12 = 1;
   //newrecord %13 = (%12, %0) : {int index,[{int lhs,int op,int rhs}] src}
  r0 = r13;
   //assume 
  return;
}}}
