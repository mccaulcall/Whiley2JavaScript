function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r4 = 1;
  var r5 = 2;
   //newlist %6 = (%4, %5) : [int]
  r3 = r6;
  r0 = r3;
  var r8 = 3;
  var r9 = 4;
   //newlist %10 = (%8, %9) : [int]
  r7 = r10;
  r1 = r7;
   //append %12 = %0, %1 : [int]
  r11 = r12;
  r2 = r11;
  var r13 = 6;
   //newlist %14 = (%13) : [int]
   //append %15 = %0, %14 : [int]
  r0 = r15;
  var r16 = 1;
  var r17 = 2;
  var r18 = 3;
  var r19 = 4;
   //newlist %20 = (%16, %17, %18, %19) : [int]
  if (r2 == r20) { pc = 1157; continue; }
  throw "fail";
  case 1157:
  var r21 = 1;
  var r22 = 2;
  var r23 = 6;
   //newlist %24 = (%21, %22, %23) : [int]
  if (r0 == r24) { pc = 1158; continue; }
  throw "fail";
  case 1158:
  return;
}}}
