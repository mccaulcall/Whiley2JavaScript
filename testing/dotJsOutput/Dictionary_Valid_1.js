function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  r2 = r3;
  r0 = r2;
  var r5 = 1;
  var r6 = 3;
  var r7 = 2;
   //newmap %8 = (%5, %0, %6, %7) : {int->int}
  r4 = r8;
  r1 = r4;
  var r9 = 1;
  var r10 = 1;
  var r11 = 3;
  var r12 = 2;
   //newmap %13 = (%9, %10, %11, %12) : {int->int}
  if (r1 == r13) { pc = 729; continue; }
  throw "fail";
  case 729:
  return;
}}}
