function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 1;
  var r3 = 1;
   //newrecord %4 = (%2, %3) : {int x,int y}
  r1 = r4;
  r0 = r1;
   //fieldload %5 = %0 y : {int x,int y}
  var r6 = 1;
  if (r5 == r6) { pc = 634; continue; }
  throw "fail";
  case 634:
   //fieldload %7 = %0 x : {int x,int y}
  var r8 = 1;
  if (r7 == r8) { pc = 635; continue; }
  throw "fail";
  case 635:
  return;
}}}
