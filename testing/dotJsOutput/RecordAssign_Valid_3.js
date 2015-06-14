function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
   //invoke %2 = () RecordAssign_Valid_3:f : function() -> RecordAssign_Valid_3:tac1tup
  r1 = r2;
  r0 = r1;
   //fieldload %3 = %0 f2 : {int f1,int f2}
  var r4 = 2;
  var r5 = r3 - r4;
   //fieldload %6 = %0 f2 : {int f1,int f2}
  var r7 = 2;
  var r8 = r6 - r7;
   //update %0.f1 = %8 : {int f1,int f2} -> {int f1,int f2}
   //fieldload %9 = %0 f1 : {int f1,int f2}
   //fieldload %10 = %0 f2 : {int f1,int f2}
  if (r9 != r10) { pc = 1455; continue; }
  throw "fail";
  case 1455:
   //assume 
  return;
}}}
