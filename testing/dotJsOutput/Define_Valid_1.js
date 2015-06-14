function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r5 = 1;
  var r6 = 2;
  var r7 = 3;
   //newset %8 = (%5, %6, %7) : {int}
  r4 = r8;
  r0 = r4;
  var r10 = 1;
  var r11 = 2;
  var r12 = 3;
   //newlist %13 = (%10, %11, %12) : [int]
  r9 = r13;
  r1 = r9;
  var r15 = 1;
  var r16 = 2;
   //newrecord %17 = (%15, %16) : {int x,int y}
  r14 = r17;
  r2 = r14;
   //fieldload %19 = %2 x : {int x,int y}
  r18 = r19;
  r3 = r18;
  var r20 = 1;
  if (r3 == r20) { pc = 721; continue; }
  throw "fail";
  case 721:
   //lengthof %21 = %0 : {int}
  var r22 = 3;
  if (r21 == r22) { pc = 722; continue; }
  throw "fail";
  case 722:
  var r23 = 0;
   //indexof %24 = %1, %23 : [int]
  var r25 = 1;
  if (r24 == r25) { pc = 723; continue; }
  throw "fail";
  case 723:
  return;
}}}
