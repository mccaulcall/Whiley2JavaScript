function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  var r4 = 2;
  var r5 = 3;
   //newlist %6 = (%3, %4, %5) : [int]
  r2 = r6;
  r0 = r2;
  var r8 = 4.23;
  var r9 = 5.5;
   //newlist %10 = (%8, %9) : [real]
  r7 = r10;
  r1 = r7;
   //convert %11 = %0 [real] : [int]
   //append %12 = %1, %11 : [real]
  r1 = r12;
  var r13 = 4.23;
  var r14 = 5.5;
  var r15 = 1.0;
  var r16 = 2.0;
  var r17 = 3.0;
   //newlist %18 = (%13, %14, %15, %16, %17) : [real]
  if (r1 == r18) { pc = 1159; continue; }
  throw "fail";
  case 1159:
  return;
}}}
