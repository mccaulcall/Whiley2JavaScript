function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r2 = true;
  var r3 = false;
  var r4 = true;
   //newlist %5 = (%2, %3, %4) : [bool]
  r1 = r5;
  r0 = r1;
  var r6 = true;
  var r7 = false;
  var r8 = true;
   //newlist %9 = (%6, %7, %8) : [bool]
  if (r0 == r9) { pc = 113; continue; }
  throw "fail";
  case 113:
  var r10 = 0;
   //indexof %11 = %0, %10 : [bool]
  var r12 = true;
  if (r11 == r12) { pc = 114; continue; }
  throw "fail";
  case 114:
  var r13 = 1;
   //indexof %14 = %0, %13 : [bool]
  var r15 = false;
  if (r14 == r15) { pc = 115; continue; }
  throw "fail";
  case 115:
  var r16 = 2;
   //indexof %17 = %0, %16 : [bool]
  var r18 = true;
  if (r17 == r18) { pc = 116; continue; }
  throw "fail";
  case 116:
  var r19 = false;
  var r20 = 0;
  var r21 = false;
   //update %0[%20] = %21 : [bool] -> [bool]
  var r22 = 0;
   //indexof %23 = %0, %22 : [bool]
  var r24 = false;
  if (r23 == r24) { pc = 117; continue; }
  throw "fail";
  case 117:
  var r25 = 1;
   //indexof %26 = %0, %25 : [bool]
  var r27 = false;
  if (r26 == r27) { pc = 118; continue; }
  throw "fail";
  case 118:
  var r28 = 2;
   //indexof %29 = %0, %28 : [bool]
  var r30 = true;
  if (r29 == r30) { pc = 119; continue; }
  throw "fail";
  case 119:
  return;
}}}
