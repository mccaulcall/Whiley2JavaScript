function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = 1;
   //newrecord %3 = (%2) : {int f}
  r1 = r3;
  r0 = r1;
   //fieldload %4 = %0 f : {int f}
  var r5 = 1;
  var r6 = r4 + r5;
   //fieldload %7 = %0 f : {int f}
  var r8 = 1;
  var r9 = r7 + r8;
   //update %0.f = %9 : {int f} -> {int f}
  var r10 = 2;
   //newrecord %11 = (%10) : {int f}
  if (r0 == r11) { pc = 1879; continue; }
  throw "fail";
  case 1879:
  return;
}}}
