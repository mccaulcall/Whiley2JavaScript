function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  var r4 = 2;
  var r5 = 3;
   //newlist %6 = (%3, %4, %5) : [int]
  r2 = r6;
  r0 = r2;
  var r8 = 0;
  var r9 = 2;
   //sublist %10 = %0, %8, %9 : [int]
  r7 = r10;
  r1 = r7;
  var r11 = 1;
  var r12 = 2;
  var r13 = 3;
   //newlist %14 = (%11, %12, %13) : [int]
  if (r0 == r14) { pc = 1243; continue; }
  throw "fail";
  case 1243:
  var r15 = 1;
  var r16 = 2;
   //newlist %17 = (%15, %16) : [int]
  if (r1 == r17) { pc = 1244; continue; }
  throw "fail";
  case 1244:
  return;
}}}
